import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaypalEntityComponent } from './paypal-entity.component';

describe('PaypalEntityComponent', () => {
  let component: PaypalEntityComponent;
  let fixture: ComponentFixture<PaypalEntityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaypalEntityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaypalEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
