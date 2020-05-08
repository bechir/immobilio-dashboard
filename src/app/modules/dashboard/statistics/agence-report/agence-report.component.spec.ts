import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenceReportComponent } from './agence-report.component';

describe('AgenceReportComponent', () => {
  let component: AgenceReportComponent;
  let fixture: ComponentFixture<AgenceReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgenceReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgenceReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
