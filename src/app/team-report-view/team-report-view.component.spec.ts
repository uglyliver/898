import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamReportViewComponent } from './team-report-view.component';

describe('TeamReportViewComponent', () => {
  let component: TeamReportViewComponent;
  let fixture: ComponentFixture<TeamReportViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamReportViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamReportViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
