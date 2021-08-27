import { Test, TestingModule } from '@nestjs/testing';
import { EtatproduitService } from './etatproduit.service';

describe('EtatproduitService', () => {
  let service: EtatproduitService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EtatproduitService],
    }).compile();

    service = module.get<EtatproduitService>(EtatproduitService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
