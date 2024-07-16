import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetStep4Component } from './reset-step4.component';

describe('ResetStep4Component', () => {
  let component: ResetStep4Component;
  let fixture: ComponentFixture<ResetStep4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetStep4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResetStep4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
