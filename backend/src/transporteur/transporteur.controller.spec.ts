import { Test, TestingModule } from '@nestjs/testing';
import { TransporteurController } from './transporteur.controller';

describe('TransporteurController', () => {
  let controller: TransporteurController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TransporteurController],
    }).compile();

    controller = module.get<TransporteurController>(TransporteurController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
