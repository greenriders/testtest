import { TestBed } from '@angular/core/testing';

import { EtatproduitService } from './etatproduit.service';

describe('EtatproduitService', () => {
  let service: EtatproduitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EtatproduitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
