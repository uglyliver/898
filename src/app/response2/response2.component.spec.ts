import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Response2Component } from './response2.component';

describe('Response2Component', () => {
  let component: Response2Component;
  let fixture: ComponentFixture<Response2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Response2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Response2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
