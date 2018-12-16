import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Holidayhr2Component } from './holidayhr2.component';

describe('Holidayhr2Component', () => {
  let component: Holidayhr2Component;
  let fixture: ComponentFixture<Holidayhr2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Holidayhr2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Holidayhr2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
