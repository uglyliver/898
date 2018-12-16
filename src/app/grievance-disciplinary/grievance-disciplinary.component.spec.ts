import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrievanceDisciplinaryComponent } from './grievance-disciplinary.component';

describe('GrievanceDisciplinaryComponent', () => {
  let component: GrievanceDisciplinaryComponent;
  let fixture: ComponentFixture<GrievanceDisciplinaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrievanceDisciplinaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrievanceDisciplinaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
