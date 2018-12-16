import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidayType2Component } from './holiday-type2.component';

describe('HolidayType2Component', () => {
  let component: HolidayType2Component;
  let fixture: ComponentFixture<HolidayType2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HolidayType2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HolidayType2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
