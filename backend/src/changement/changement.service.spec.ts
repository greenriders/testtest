import { Test, TestingModule } from '@nestjs/testing';
import { ChangementService } from './changement.service';

describe('ChangementService', () => {
  let service: ChangementService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChangementService],
    }).compile();

    service = module.get<ChangementService>(ChangementService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
