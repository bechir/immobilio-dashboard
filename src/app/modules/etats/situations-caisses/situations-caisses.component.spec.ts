import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SituationsCaissesComponent } from './situations-caisses.component';

describe('SituationsCaissesComponent', () => {
  let component: SituationsCaissesComponent;
  let fixture: ComponentFixture<SituationsCaissesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SituationsCaissesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SituationsCaissesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
