import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamFileDiscComponent } from './team-file-disc.component';

describe('TeamFileDiscComponent', () => {
  let component: TeamFileDiscComponent;
  let fixture: ComponentFixture<TeamFileDiscComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamFileDiscComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamFileDiscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
