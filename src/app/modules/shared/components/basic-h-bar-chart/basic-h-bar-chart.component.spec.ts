import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicHBarChartComponent } from './basic-h-bar-chart.component';

describe('BasicHBarChartComponent', () => {
  let component: BasicHBarChartComponent;
  let fixture: ComponentFixture<BasicHBarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicHBarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicHBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
