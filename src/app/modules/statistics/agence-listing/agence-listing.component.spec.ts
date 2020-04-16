import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenceListingComponent } from './agence-listing.component';

describe('AgenceListingComponent', () => {
  let component: AgenceListingComponent;
  let fixture: ComponentFixture<AgenceListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgenceListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgenceListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
