import { Controller, Get } from '@nestjs/common';
import { IPricingTable } from './interfaces';
import { PricingTableService } from './pricing-table.service';

@Controller('pricing-table')
export class PricingTableController {
  constructor(private readonly pricingTableService: PricingTableService) {}

  @Get()
  async getPricingTable(): Promise<IPricingTable> {
    return await this.pricingTableService.getPricingTable();
  }
}
