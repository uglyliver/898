import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourPackComponent } from './your-pack.component';

describe('YourPackComponent', () => {
  let component: YourPackComponent;
  let fixture: ComponentFixture<YourPackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourPackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourPackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
