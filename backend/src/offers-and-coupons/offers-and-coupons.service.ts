import { Injectable } from '@nestjs/common';
import { CreateOffersAndCouponDto } from './dto/create-offers-and-coupon.dto';
import { UpdateOffersAndCouponDto } from './dto/update-offers-and-coupon.dto';

@Injectable()
export class OffersAndCouponsService {
  create(createOffersAndCouponDto: CreateOffersAndCouponDto) {
    return 'This action adds a new offersAndCoupon';
  }

  findAll() {
    return `This action returns all offersAndCoupons`;
  }

  findOne(id: number) {
    return `This action returns a #${id} offersAndCoupon`;
  }

  update(id: number, updateOffersAndCouponDto: UpdateOffersAndCouponDto) {
    return `This action updates a #${id} offersAndCoupon`;
  }

  remove(id: number) {
    return `This action removes a #${id} offersAndCoupon`;
  }
}
