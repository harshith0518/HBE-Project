import { PartialType } from '@nestjs/mapped-types';
import { CreateOffersAndCouponDto } from './create-offers-and-coupon.dto';

export class UpdateOffersAndCouponDto extends PartialType(CreateOffersAndCouponDto) {}
