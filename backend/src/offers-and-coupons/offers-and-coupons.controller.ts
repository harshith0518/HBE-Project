import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OffersAndCouponsService } from './offers-and-coupons.service';
import { CreateOffersAndCouponDto } from './dto/create-offers-and-coupon.dto';
import { UpdateOffersAndCouponDto } from './dto/update-offers-and-coupon.dto';

@Controller('offers-and-coupons')
export class OffersAndCouponsController {
  constructor(private readonly offersAndCouponsService: OffersAndCouponsService) {}

  @Post()
  create(@Body() createOffersAndCouponDto: CreateOffersAndCouponDto) {
    return this.offersAndCouponsService.create(createOffersAndCouponDto);
  }

  @Get()
  findAll() {
    return this.offersAndCouponsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.offersAndCouponsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOffersAndCouponDto: UpdateOffersAndCouponDto) {
    return this.offersAndCouponsService.update(+id, updateOffersAndCouponDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.offersAndCouponsService.remove(+id);
  }
}
