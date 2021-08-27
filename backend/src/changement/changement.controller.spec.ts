import { Test, TestingModule } from '@nestjs/testing';
import { ChangementController } from './changement.controller';

describe('ChangementController', () => {
  let controller: ChangementController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChangementController],
    }).compile();

    controller = module.get<ChangementController>(ChangementController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
