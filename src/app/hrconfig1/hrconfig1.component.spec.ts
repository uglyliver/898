import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hrconfig1Component } from './hrconfig1.component';

describe('Hrconfig1Component', () => {
  let component: Hrconfig1Component;
  let fixture: ComponentFixture<Hrconfig1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hrconfig1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hrconfig1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
