import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessTripApprovalComponent } from './business-trip-approval.component';

describe('BusinessTripApprovalComponent', () => {
  let component: BusinessTripApprovalComponent;
  let fixture: ComponentFixture<BusinessTripApprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessTripApprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessTripApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
