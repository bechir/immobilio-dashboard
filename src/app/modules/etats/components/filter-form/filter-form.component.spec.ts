import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EtatFilterFormComponent } from './etat-filter-form.component';

describe('EtatFilterFormComponent', () => {
  let component: EtatFilterFormComponent;
  let fixture: ComponentFixture<EtatFilterFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtatFilterFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtatFilterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
