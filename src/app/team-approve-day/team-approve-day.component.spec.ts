import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamApproveDayComponent } from './team-approve-day.component';

describe('TeamApproveDayComponent', () => {
  let component: TeamApproveDayComponent;
  let fixture: ComponentFixture<TeamApproveDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamApproveDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamApproveDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
