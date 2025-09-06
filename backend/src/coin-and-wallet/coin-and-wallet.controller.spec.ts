import { Test, TestingModule } from '@nestjs/testing';
import { CoinAndWalletController } from './coin-and-wallet.controller';
import { CoinAndWalletService } from './coin-and-wallet.service';

describe('CoinAndWalletController', () => {
  let controller: CoinAndWalletController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CoinAndWalletController],
      providers: [CoinAndWalletService],
    }).compile();

    controller = module.get<CoinAndWalletController>(CoinAndWalletController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
