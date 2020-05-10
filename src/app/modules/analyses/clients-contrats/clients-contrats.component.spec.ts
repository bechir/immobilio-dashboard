import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyseClientsContratsComponent } from './clients-contrats.component';

describe('AnalyseClientsContratsComponent', () => {
  let component: AnalyseClientsContratsComponent;
  let fixture: ComponentFixture<AnalyseClientsContratsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyseClientsContratsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyseClientsContratsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
