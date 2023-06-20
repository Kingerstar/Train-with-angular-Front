import { TestBed } from '@angular/core/testing';

import { DbEnnemyService } from './db-ennemy.service';

describe('DbEnnemyService', () => {
  let service: DbEnnemyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DbEnnemyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
