import { Test, TestingModule } from '@nestjs/testing';
import { TiffinManagementController } from './tiffin-management.controller';
import { TiffinManagementService } from './tiffin-management.service';

describe('TiffinManagementController', () => {
  let controller: TiffinManagementController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TiffinManagementController],
      providers: [TiffinManagementService],
    }).compile();

    controller = module.get<TiffinManagementController>(TiffinManagementController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
