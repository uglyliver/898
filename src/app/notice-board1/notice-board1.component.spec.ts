import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeBoard1Component } from './notice-board1.component';

describe('NoticeBoard1Component', () => {
  let component: NoticeBoard1Component;
  let fixture: ComponentFixture<NoticeBoard1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticeBoard1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticeBoard1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
