import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamTripApproveComponent } from './team-trip-approve.component';

describe('TeamTripApproveComponent', () => {
  let component: TeamTripApproveComponent;
  let fixture: ComponentFixture<TeamTripApproveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamTripApproveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamTripApproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
