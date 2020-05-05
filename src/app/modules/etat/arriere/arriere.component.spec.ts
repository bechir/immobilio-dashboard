import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArriereComponent } from './arriere.component';

describe('ArriereComponent', () => {
  let component: ArriereComponent;
  let fixture: ComponentFixture<ArriereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArriereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArriereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
