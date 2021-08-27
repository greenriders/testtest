import { TestBed } from '@angular/core/testing';

import { NomAnomalieService } from './anomalie-category.service';

describe('NomAnomalieService', () => {
  let service: NomAnomalieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NomAnomalieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
