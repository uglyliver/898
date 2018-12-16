import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidayHistoryComponent } from './holiday-history.component';

describe('HolidayHistoryComponent', () => {
  let component: HolidayHistoryComponent;
  let fixture: ComponentFixture<HolidayHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HolidayHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HolidayHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
