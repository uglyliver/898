import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityverifyComponent } from './entityverify.component';

describe('EntityverifyComponent', () => {
  let component: EntityverifyComponent;
  let fixture: ComponentFixture<EntityverifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityverifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityverifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
