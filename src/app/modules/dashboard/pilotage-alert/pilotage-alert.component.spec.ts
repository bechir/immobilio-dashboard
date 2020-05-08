import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PilotageAlertComponent } from './pilotage-alert.component';

describe('PilotageAlertComponent', () => {
  let component: PilotageAlertComponent;
  let fixture: ComponentFixture<PilotageAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PilotageAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PilotageAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
