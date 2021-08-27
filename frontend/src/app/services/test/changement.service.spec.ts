import { TestBed } from '@angular/core/testing';

import { ChangementService } from './changement.service';

describe('ChangementService', () => {
  let service: ChangementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChangementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
