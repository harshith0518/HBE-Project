import { Test, TestingModule } from '@nestjs/testing';
import { SharedUtilitiesAndTypesService } from './shared-utilities-and-types.service';

describe('SharedUtilitiesAndTypesService', () => {
  let service: SharedUtilitiesAndTypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SharedUtilitiesAndTypesService],
    }).compile();

    service = module.get<SharedUtilitiesAndTypesService>(SharedUtilitiesAndTypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
