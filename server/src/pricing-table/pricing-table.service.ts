import { Injectable } from '@nestjs/common';
import { IPricingTable, IPricingTableRow } from './interfaces';
import * as fs from 'fs';
import * as path from 'path';
import * as csv from 'csv-parser';

@Injectable()
export class PricingTableService {
  async getPricingTable(): Promise<IPricingTable> {
    return await this._parseTable();
  }

  async _parseTable(): Promise<IPricingTable> {
    const results: IPricingTableRow[] = [];
    const sortedGroups: Array<Array<IPricingTableRow>> = [];
    let currentSortedGroupIdx = null;

    return new Promise((resolve) => {
      fs.createReadStream(
        path.resolve(__dirname, '..', '..', 'assets', 'pricing_table.csv'),
      )
        .pipe(csv(['Tiers', 'Starter', 'Advanced', 'Enterprise']))
        .on('data', (data: IPricingTableRow) => {
          if (data.Tiers) {
            // this means its the beginning of the group
            if (!data.Starter && !data.Advanced && !data.Enterprise) {
              // apply current group index, used for next sortings
              currentSortedGroupIdx =
                currentSortedGroupIdx === null ? 0 : currentSortedGroupIdx + 1;
              if (sortedGroups[currentSortedGroupIdx]) {
                sortedGroups[currentSortedGroupIdx].push(data);
              } else {
                sortedGroups.push([data]);
              }
            } else {
              sortedGroups[currentSortedGroupIdx]
                ? sortedGroups[currentSortedGroupIdx].push(data)
                : results.push(data);
            }
          }
        })
        .on('end', () => {
          sortedGroups.sort((a, b) =>
            this._sortStringsCompareFn(a[0].Tiers, b[0].Tiers),
          );

          const outputGroups = sortedGroups.reduce((outList, group) => {
            const [groupName, ...groupElements] = group;
            groupElements.sort((a, b) =>
              this._sortStringsCompareFn(a.Tiers, b.Tiers),
            );
            outList.push(groupName);
            outList.push(...groupElements);
            return outList;
          }, []);
          results.push(...outputGroups);
          resolve(results);
        });
    });
  }
  _sortStringsCompareFn(sortAKey: string, sortBKey: string): number {
    if (sortAKey > sortBKey) return 1;
    if (sortAKey < sortBKey) return -1;
    if (sortAKey === sortBKey) return 0;
  }
}
