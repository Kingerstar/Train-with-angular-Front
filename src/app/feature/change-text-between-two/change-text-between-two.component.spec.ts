import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeTextBetweenTwoComponent } from './change-text-between-two.component';

describe('ChangeTextBetweenTwoComponent', () => {
  let component: ChangeTextBetweenTwoComponent;
  let fixture: ComponentFixture<ChangeTextBetweenTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChangeTextBetweenTwoComponent]
    });
    fixture = TestBed.createComponent(ChangeTextBetweenTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
