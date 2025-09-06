import { Test, TestingModule } from '@nestjs/testing';
import { CoinAndWalletService } from './coin-and-wallet.service';

describe('CoinAndWalletService', () => {
  let service: CoinAndWalletService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CoinAndWalletService],
    }).compile();

    service = module.get<CoinAndWalletService>(CoinAndWalletService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
