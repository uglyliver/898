import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReimbusmentComponent } from './reimbusment.component';

describe('ReimbusmentComponent', () => {
  let component: ReimbusmentComponent;
  let fixture: ComponentFixture<ReimbusmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReimbusmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReimbusmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
