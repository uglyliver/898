import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingHolidayComponent } from './pending-holiday.component';

describe('PendingHolidayComponent', () => {
  let component: PendingHolidayComponent;
  let fixture: ComponentFixture<PendingHolidayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingHolidayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingHolidayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
