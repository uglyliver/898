import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppraisalMyComponent } from './appraisal-my.component';

describe('AppraisalMyComponent', () => {
  let component: AppraisalMyComponent;
  let fixture: ComponentFixture<AppraisalMyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppraisalMyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppraisalMyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
