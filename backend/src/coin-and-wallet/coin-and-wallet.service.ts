import { Injectable } from '@nestjs/common';
import { CreateCoinAndWalletDto } from './dto/create-coin-and-wallet.dto';
import { UpdateCoinAndWalletDto } from './dto/update-coin-and-wallet.dto';

@Injectable()
export class CoinAndWalletService {
  create(createCoinAndWalletDto: CreateCoinAndWalletDto) {
    return 'This action adds a new coinAndWallet';
  }

  findAll() {
    return `This action returns all coinAndWallet`;
  }

  findOne(id: number) {
    return `This action returns a #${id} coinAndWallet`;
  }

  update(id: number, updateCoinAndWalletDto: UpdateCoinAndWalletDto) {
    return `This action updates a #${id} coinAndWallet`;
  }

  remove(id: number) {
    return `This action removes a #${id} coinAndWallet`;
  }
}
