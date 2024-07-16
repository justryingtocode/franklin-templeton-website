import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NAVAlertsComponent } from './nav-alerts.component';

describe('NAVAlertsComponent', () => {
  let component: NAVAlertsComponent;
  let fixture: ComponentFixture<NAVAlertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NAVAlertsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NAVAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
