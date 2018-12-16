import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlankBranchComponent } from './blank-branch.component';

describe('BlankBranchComponent', () => {
  let component: BlankBranchComponent;
  let fixture: ComponentFixture<BlankBranchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlankBranchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlankBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
