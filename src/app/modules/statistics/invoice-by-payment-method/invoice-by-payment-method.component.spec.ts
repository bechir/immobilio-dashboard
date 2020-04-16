import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceByPaymentMethodComponent } from './invoice-by-payment-method.component';

describe('InvoiceByPaymentMethodComponent', () => {
  let component: InvoiceByPaymentMethodComponent;
  let fixture: ComponentFixture<InvoiceByPaymentMethodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceByPaymentMethodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceByPaymentMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
