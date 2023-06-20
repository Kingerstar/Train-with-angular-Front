import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetweenTwoComponent } from './between-two.component';

describe('BetweenTwoComponent', () => {
  let component: BetweenTwoComponent;
  let fixture: ComponentFixture<BetweenTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BetweenTwoComponent]
    });
    fixture = TestBed.createComponent(BetweenTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
