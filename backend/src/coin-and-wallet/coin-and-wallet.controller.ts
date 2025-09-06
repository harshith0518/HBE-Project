import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CoinAndWalletService } from './coin-and-wallet.service';
import { CreateCoinAndWalletDto } from './dto/create-coin-and-wallet.dto';
import { UpdateCoinAndWalletDto } from './dto/update-coin-and-wallet.dto';

@Controller('coin-and-wallet')
export class CoinAndWalletController {
  constructor(private readonly coinAndWalletService: CoinAndWalletService) {}

  @Post()
  create(@Body() createCoinAndWalletDto: CreateCoinAndWalletDto) {
    return this.coinAndWalletService.create(createCoinAndWalletDto);
  }

  @Get()
  findAll() {
    return this.coinAndWalletService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coinAndWalletService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCoinAndWalletDto: UpdateCoinAndWalletDto) {
    return this.coinAndWalletService.update(+id, updateCoinAndWalletDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coinAndWalletService.remove(+id);
  }
}
