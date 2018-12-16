import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamAttndRepComponent } from './team-attnd-rep.component';

describe('TeamAttndRepComponent', () => {
  let component: TeamAttndRepComponent;
  let fixture: ComponentFixture<TeamAttndRepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamAttndRepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamAttndRepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
