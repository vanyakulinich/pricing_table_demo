export interface IPricingTableRow {
  Tiers: string
  Starter: string
  Advanced: string
  Enterprise: string
}

export interface IPricingTable extends Array<IPricingTableRow> {}

export interface IHttpService {
  apiHost?: string
  getPricingTable: () => Promise<IPricingTable>
}
