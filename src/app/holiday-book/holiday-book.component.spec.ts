import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidayBookComponent } from './holiday-book.component';

describe('HolidayBookComponent', () => {
  let component: HolidayBookComponent;
  let fixture: ComponentFixture<HolidayBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HolidayBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HolidayBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
