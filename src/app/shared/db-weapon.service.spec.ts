import { TestBed } from '@angular/core/testing';

import { DbWeaponService } from './db-weapon.service';

describe('DbWeaponService', () => {
  let service: DbWeaponService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DbWeaponService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
