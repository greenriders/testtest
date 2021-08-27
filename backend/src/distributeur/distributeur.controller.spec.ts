import { Test, TestingModule } from '@nestjs/testing';
import { DistributeurController } from './distributeur.controller';

describe('DistributeurController', () => {
  let controller: DistributeurController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DistributeurController],
    }).compile();

    controller = module.get<DistributeurController>(DistributeurController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
