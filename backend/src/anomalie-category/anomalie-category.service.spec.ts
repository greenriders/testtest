import { Test, TestingModule } from '@nestjs/testing';
import { AnomalieCategoryService } from './anomalie-category.service';

describe('AnomalieService', () => {
  let service: AnomalieCategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AnomalieCategoryService],
    }).compile();

    service = module.get<AnomalieCategoryService>(AnomalieCategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
