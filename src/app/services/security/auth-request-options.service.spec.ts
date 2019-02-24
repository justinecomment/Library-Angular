import { TestBed } from '@angular/core/testing';

import { AuthRequestOptionsService } from './auth-request-options.service';

describe('AuthRequestOptionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthRequestOptionsService = TestBed.get(AuthRequestOptionsService);
    expect(service).toBeTruthy();
  });
});
