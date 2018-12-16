import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefitsEComponent } from './benefits-e.component';

describe('BenefitsEComponent', () => {
  let component: BenefitsEComponent;
  let fixture: ComponentFixture<BenefitsEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenefitsEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BenefitsEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
