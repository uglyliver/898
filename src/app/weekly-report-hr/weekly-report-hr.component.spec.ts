import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyReportHrComponent } from './weekly-report-hr.component';

describe('WeeklyReportHrComponent', () => {
  let component: WeeklyReportHrComponent;
  let fixture: ComponentFixture<WeeklyReportHrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeeklyReportHrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyReportHrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
