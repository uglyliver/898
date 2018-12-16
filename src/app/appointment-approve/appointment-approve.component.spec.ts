import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentApproveComponent } from './appointment-approve.component';

describe('AppointmentApproveComponent', () => {
  let component: AppointmentApproveComponent;
  let fixture: ComponentFixture<AppointmentApproveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointmentApproveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentApproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
