import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamAppraisalEvalComponent } from './team-appraisal-eval.component';

describe('TeamAppraisalEvalComponent', () => {
  let component: TeamAppraisalEvalComponent;
  let fixture: ComponentFixture<TeamAppraisalEvalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamAppraisalEvalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamAppraisalEvalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
