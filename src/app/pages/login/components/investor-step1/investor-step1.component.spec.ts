import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestorStep1Component } from './investor-step1.component';

describe('InvestorStep1Component', () => {
  let component: InvestorStep1Component;
  let fixture: ComponentFixture<InvestorStep1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestorStep1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestorStep1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
