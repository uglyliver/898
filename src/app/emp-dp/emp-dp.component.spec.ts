import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpDpComponent } from './emp-dp.component';

describe('EmpDpComponent', () => {
  let component: EmpDpComponent;
  let fixture: ComponentFixture<EmpDpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpDpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpDpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
