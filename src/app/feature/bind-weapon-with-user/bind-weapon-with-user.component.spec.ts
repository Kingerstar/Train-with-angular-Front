import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindWeaponWithUserComponent } from './bind-weapon-with-user.component';

describe('BindWeaponWithUserComponent', () => {
  let component: BindWeaponWithUserComponent;
  let fixture: ComponentFixture<BindWeaponWithUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BindWeaponWithUserComponent]
    });
    fixture = TestBed.createComponent(BindWeaponWithUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
