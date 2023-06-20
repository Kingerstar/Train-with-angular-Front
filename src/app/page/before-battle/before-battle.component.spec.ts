import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeforeBattleComponent } from './before-battle.component';

describe('BeforeBattleComponent', () => {
  let component: BeforeBattleComponent;
  let fixture: ComponentFixture<BeforeBattleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BeforeBattleComponent]
    });
    fixture = TestBed.createComponent(BeforeBattleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
