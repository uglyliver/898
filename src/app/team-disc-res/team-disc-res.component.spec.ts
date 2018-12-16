import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamDiscResComponent } from './team-disc-res.component';

describe('TeamDiscResComponent', () => {
  let component: TeamDiscResComponent;
  let fixture: ComponentFixture<TeamDiscResComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamDiscResComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamDiscResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
