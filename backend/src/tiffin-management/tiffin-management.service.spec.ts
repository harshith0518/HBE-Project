import { Test, TestingModule } from '@nestjs/testing';
import { TiffinManagementService } from './tiffin-management.service';

describe('TiffinManagementService', () => {
  let service: TiffinManagementService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TiffinManagementService],
    }).compile();

    service = module.get<TiffinManagementService>(TiffinManagementService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
