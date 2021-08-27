import { TestBed } from '@angular/core/testing';

import { DemandereparationService } from './demandereparation.service';

describe('DemandereparationService', () => {
  let service: DemandereparationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemandereparationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
