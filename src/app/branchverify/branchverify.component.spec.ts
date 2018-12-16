import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchverifyComponent } from './branchverify.component';

describe('BranchverifyComponent', () => {
  let component: BranchverifyComponent;
  let fixture: ComponentFixture<BranchverifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranchverifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchverifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
