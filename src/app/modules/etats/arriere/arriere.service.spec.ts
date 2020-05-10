import { TestBed } from '@angular/core/testing';

import { ArriereService } from './arriere.service';

describe('ArriereService', () => {
  let service: ArriereService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArriereService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
