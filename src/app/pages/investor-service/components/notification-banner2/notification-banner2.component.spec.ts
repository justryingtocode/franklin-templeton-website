import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationBanner2Component } from './notification-banner2.component';

describe('NotificationBanner2Component', () => {
  let component: NotificationBanner2Component;
  let fixture: ComponentFixture<NotificationBanner2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationBanner2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationBanner2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
