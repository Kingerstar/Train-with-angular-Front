import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSolveComponent } from './input-solve.component';

describe('InputSolveComponent', () => {
  let component: InputSolveComponent;
  let fixture: ComponentFixture<InputSolveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputSolveComponent]
    });
    fixture = TestBed.createComponent(InputSolveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
