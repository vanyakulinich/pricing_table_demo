import { Test, TestingModule } from '@nestjs/testing';
import { PricingTableController } from './pricing-table.controller';

describe('PricingTableController', () => {
  let controller: PricingTableController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PricingTableController],
    }).compile();

    controller = module.get<PricingTableController>(PricingTableController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
