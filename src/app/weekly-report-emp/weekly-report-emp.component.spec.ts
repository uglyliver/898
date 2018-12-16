import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyReportEmpComponent } from './weekly-report-emp.component';

describe('WeeklyReportEmpComponent', () => {
  let component: WeeklyReportEmpComponent;
  let fixture: ComponentFixture<WeeklyReportEmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeeklyReportEmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyReportEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
