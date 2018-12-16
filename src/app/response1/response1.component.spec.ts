import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Response1Component } from './response1.component';

describe('Response1Component', () => {
  let component: Response1Component;
  let fixture: ComponentFixture<Response1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Response1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Response1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
