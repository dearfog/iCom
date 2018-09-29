import { TestBed } from '@angular/core/testing';

import { CryptographerService } from './cryptographer.service';

describe('CryptographerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CryptographerService = TestBed.get(CryptographerService);
    expect(service).toBeTruthy();
  });
});
