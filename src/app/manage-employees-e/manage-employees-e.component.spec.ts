import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageEmployeesEComponent } from './manage-employees-e.component';

describe('ManageEmployeesEComponent', () => {
  let component: ManageEmployeesEComponent;
  let fixture: ComponentFixture<ManageEmployeesEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageEmployeesEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageEmployeesEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
