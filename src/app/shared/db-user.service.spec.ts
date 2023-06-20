import { TestBed } from '@angular/core/testing';

import { DbUserService } from './db-user.service';

describe('DbUserService', () => {
  let service: DbUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DbUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
