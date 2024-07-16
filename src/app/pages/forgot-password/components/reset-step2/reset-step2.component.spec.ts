import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetStep2Component } from './reset-step2.component';

describe('ResetStep2Component', () => {
  let component: ResetStep2Component;
  let fixture: ComponentFixture<ResetStep2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetStep2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResetStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
