import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessTripDetailsComponent } from './business-trip-details.component';

describe('BusinessTripDetailsComponent', () => {
  let component: BusinessTripDetailsComponent;
  let fixture: ComponentFixture<BusinessTripDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessTripDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessTripDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
