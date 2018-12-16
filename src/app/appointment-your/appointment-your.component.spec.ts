import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentYourComponent } from './appointment-your.component';

describe('AppointmentYourComponent', () => {
  let component: AppointmentYourComponent;
  let fixture: ComponentFixture<AppointmentYourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointmentYourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentYourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
