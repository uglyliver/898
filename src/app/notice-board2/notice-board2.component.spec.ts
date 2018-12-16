import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeBoard2Component } from './notice-board2.component';

describe('NoticeBoard2Component', () => {
  let component: NoticeBoard2Component;
  let fixture: ComponentFixture<NoticeBoard2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticeBoard2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticeBoard2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
