import { Module } from '@nestjs/common';
import { ConfigModule } from './config/config.module';
import { PricingTableModule } from './pricing-table/pricing-table.module';

@Module({
  imports: [ConfigModule, PricingTableModule],
})
export class AppModule {}
