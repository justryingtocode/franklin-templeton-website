import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetStep1Component } from './reset-step1.component';

describe('ResetStep1Component', () => {
  let component: ResetStep1Component;
  let fixture: ComponentFixture<ResetStep1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetStep1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResetStep1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
