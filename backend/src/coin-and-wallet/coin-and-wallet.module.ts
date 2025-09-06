import { Module } from '@nestjs/common';
import { CoinAndWalletService } from './coin-and-wallet.service';
import { CoinAndWalletController } from './coin-and-wallet.controller';

@Module({
  controllers: [CoinAndWalletController],
  providers: [CoinAndWalletService],
})
export class CoinAndWalletModule {}
