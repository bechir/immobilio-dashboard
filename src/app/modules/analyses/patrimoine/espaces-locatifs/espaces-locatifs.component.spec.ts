import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspacesLocatifsComponent } from './espaces-locatifs.component';

describe('EspacesLocatifsComponent', () => {
  let component: EspacesLocatifsComponent;
  let fixture: ComponentFixture<EspacesLocatifsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspacesLocatifsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspacesLocatifsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
