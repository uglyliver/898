import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppraisalObjComponent } from './appraisal-obj.component';

describe('AppraisalObjComponent', () => {
  let component: AppraisalObjComponent;
  let fixture: ComponentFixture<AppraisalObjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppraisalObjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppraisalObjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
