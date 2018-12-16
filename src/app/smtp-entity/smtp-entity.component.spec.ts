import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmtpEntityComponent } from './smtp-entity.component';

describe('SmtpEntityComponent', () => {
  let component: SmtpEntityComponent;
  let fixture: ComponentFixture<SmtpEntityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmtpEntityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmtpEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
