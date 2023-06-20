import { TestBed } from '@angular/core/testing';

import { BindUserWithWeaponService } from './bind-user-with-weapon.service';

describe('BindUserWithWeaponService', () => {
  let service: BindUserWithWeaponService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BindUserWithWeaponService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
