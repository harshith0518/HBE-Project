import { Module } from '@nestjs/common';
import { OffersAndCouponsService } from './offers-and-coupons.service';
import { OffersAndCouponsController } from './offers-and-coupons.controller';

@Module({
  controllers: [OffersAndCouponsController],
  providers: [OffersAndCouponsService],
})
export class OffersAndCouponsModule {}
