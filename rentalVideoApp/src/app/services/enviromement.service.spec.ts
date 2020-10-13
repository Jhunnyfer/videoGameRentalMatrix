import { TestBed } from '@angular/core/testing';

import { EnviromementService } from './enviromement.service';

describe('EnviromementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnviromementService = TestBed.get(EnviromementService);
    expect(service).toBeTruthy();
  });
});
