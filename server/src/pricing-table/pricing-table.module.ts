import { Module } from '@nestjs/common';
import { PricingTableController } from './pricing-table.controller';
import { PricingTableService } from './pricing-table.service';

@Module({
  controllers: [PricingTableController],
  providers: [PricingTableService]
})
export class PricingTableModule {}
