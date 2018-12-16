import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandbookEmpComponent } from './handbook-emp.component';

describe('HandbookEmpComponent', () => {
  let component: HandbookEmpComponent;
  let fixture: ComponentFixture<HandbookEmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandbookEmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandbookEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
