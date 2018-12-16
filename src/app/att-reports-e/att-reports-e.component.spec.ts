import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttReportsEComponent } from './att-reports-e.component';

describe('AttReportsEComponent', () => {
  let component: AttReportsEComponent;
  let fixture: ComponentFixture<AttReportsEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttReportsEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttReportsEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
