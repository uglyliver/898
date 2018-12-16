import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityloginComponent } from './entitylogin.component';

describe('EntityloginComponent', () => {
  let component: EntityloginComponent;
  let fixture: ComponentFixture<EntityloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
