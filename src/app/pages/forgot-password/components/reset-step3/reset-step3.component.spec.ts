import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetStep3Component } from './reset-step3.component';

describe('ResetStep3Component', () => {
  let component: ResetStep3Component;
  let fixture: ComponentFixture<ResetStep3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetStep3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResetStep3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
