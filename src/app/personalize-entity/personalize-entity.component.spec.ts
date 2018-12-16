import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalizeEntityComponent } from './personalize-entity.component';

describe('PersonalizeEntityComponent', () => {
  let component: PersonalizeEntityComponent;
  let fixture: ComponentFixture<PersonalizeEntityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalizeEntityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalizeEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
