import { Test, TestingModule } from '@nestjs/testing';
import { OffersAndCouponsService } from './offers-and-coupons.service';

describe('OffersAndCouponsService', () => {
  let service: OffersAndCouponsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OffersAndCouponsService],
    }).compile();

    service = module.get<OffersAndCouponsService>(OffersAndCouponsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
