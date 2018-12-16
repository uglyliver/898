import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandBookHrComponent } from './hand-book-hr.component';

describe('HandBookHrComponent', () => {
  let component: HandBookHrComponent;
  let fixture: ComponentFixture<HandBookHrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandBookHrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandBookHrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
