import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceByAgenceBarChartComponent } from './invoice-by-agence-bar-chart.component';

describe('InvoiceByAgenceBarChartComponent', () => {
  let component: InvoiceByAgenceBarChartComponent;
  let fixture: ComponentFixture<InvoiceByAgenceBarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceByAgenceBarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceByAgenceBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
