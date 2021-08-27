import { Test, TestingModule } from '@nestjs/testing';
import { EtatproduitController } from './etatproduit.controller';

describe('EtatproduitController', () => {
  let controller: EtatproduitController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EtatproduitController],
    }).compile();

    controller = module.get<EtatproduitController>(EtatproduitController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
