import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpTypeComponent } from './emp-type.component';

describe('EmpTypeComponent', () => {
  let component: EmpTypeComponent;
  let fixture: ComponentFixture<EmpTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
