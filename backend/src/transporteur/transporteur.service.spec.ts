import { Test, TestingModule } from '@nestjs/testing';
import { TransporteurService } from './transporteur.service';

describe('TransporteurService', () => {
  let service: TransporteurService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransporteurService],
    }).compile();

    service = module.get<TransporteurService>(TransporteurService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
