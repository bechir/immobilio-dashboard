import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensesByNatureExpenseComponent } from './expenses-by-nature-expense.component';

describe('ExpensesByNatureExpenseComponent', () => {
  let component: ExpensesByNatureExpenseComponent;
  let fixture: ComponentFixture<ExpensesByNatureExpenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpensesByNatureExpenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpensesByNatureExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
