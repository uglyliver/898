import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppraisalAssignComponent } from './appraisal-assign.component';

describe('AppraisalAssignComponent', () => {
  let component: AppraisalAssignComponent;
  let fixture: ComponentFixture<AppraisalAssignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppraisalAssignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppraisalAssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
