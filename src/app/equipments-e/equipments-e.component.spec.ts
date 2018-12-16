import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentsEComponent } from './equipments-e.component';

describe('EquipmentsEComponent', () => {
  let component: EquipmentsEComponent;
  let fixture: ComponentFixture<EquipmentsEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipmentsEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentsEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
