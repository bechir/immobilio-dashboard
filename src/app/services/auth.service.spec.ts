import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let Repository: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    Repository = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(Repository).toBeTruthy();
  });
});
