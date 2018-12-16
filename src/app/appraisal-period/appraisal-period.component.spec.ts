import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppraisalPeriodComponent } from './appraisal-period.component';

describe('AppraisalPeriodComponent', () => {
  let component: AppraisalPeriodComponent;
  let fixture: ComponentFixture<AppraisalPeriodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppraisalPeriodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppraisalPeriodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
