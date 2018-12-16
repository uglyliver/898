import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttReportsBComponent } from './att-reports-b.component';

describe('AttReportsBComponent', () => {
  let component: AttReportsBComponent;
  let fixture: ComponentFixture<AttReportsBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttReportsBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttReportsBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
