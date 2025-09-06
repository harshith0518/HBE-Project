import { Test, TestingModule } from '@nestjs/testing';
import { SharedUtilitiesAndTypesController } from './shared-utilities-and-types.controller';
import { SharedUtilitiesAndTypesService } from './shared-utilities-and-types.service';

describe('SharedUtilitiesAndTypesController', () => {
  let controller: SharedUtilitiesAndTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SharedUtilitiesAndTypesController],
      providers: [SharedUtilitiesAndTypesService],
    }).compile();

    controller = module.get<SharedUtilitiesAndTypesController>(SharedUtilitiesAndTypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
