import { Test, TestingModule } from '@nestjs/testing';
import { AnomalieCategoryController } from './anomalie-category.controller';

describe('AnomalieController', () => {
  let controller: AnomalieCategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnomalieCategoryController],
    }).compile();

    controller = module.get<AnomalieCategoryController>(AnomalieCategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
