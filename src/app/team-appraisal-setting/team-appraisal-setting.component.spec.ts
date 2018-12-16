import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamAppraisalSettingComponent } from './team-appraisal-setting.component';

describe('TeamAppraisalSettingComponent', () => {
  let component: TeamAppraisalSettingComponent;
  let fixture: ComponentFixture<TeamAppraisalSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamAppraisalSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamAppraisalSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
