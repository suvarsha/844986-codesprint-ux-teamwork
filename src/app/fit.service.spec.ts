import { TestBed } from '@angular/core/testing';

import { FitService } from './fit.service';

describe('FitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FitService = TestBed.get(FitService);
    expect(service).toBeTruthy();
  });
});
