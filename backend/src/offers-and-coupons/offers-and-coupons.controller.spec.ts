import { Test, TestingModule } from '@nestjs/testing';
import { OffersAndCouponsController } from './offers-and-coupons.controller';
import { OffersAndCouponsService } from './offers-and-coupons.service';

describe('OffersAndCouponsController', () => {
  let controller: OffersAndCouponsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OffersAndCouponsController],
      providers: [OffersAndCouponsService],
    }).compile();

    controller = module.get<OffersAndCouponsController>(OffersAndCouponsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
