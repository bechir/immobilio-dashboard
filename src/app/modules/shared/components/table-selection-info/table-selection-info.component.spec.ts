import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSelectionInfoComponent } from './table-selection-info.component';

describe('TableSelectionInfoComponent', () => {
  let component: TableSelectionInfoComponent;
  let fixture: ComponentFixture<TableSelectionInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableSelectionInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableSelectionInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
