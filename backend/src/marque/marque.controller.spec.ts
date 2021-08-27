import { Test, TestingModule } from '@nestjs/testing';
import { MarqueController } from './marque.controller';

describe('MarqueController', () => {
  let controller: MarqueController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MarqueController],
    }).compile();

    controller = module.get<MarqueController>(MarqueController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
