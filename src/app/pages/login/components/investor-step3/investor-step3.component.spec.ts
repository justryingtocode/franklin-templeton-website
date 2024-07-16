import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestorStep3Component } from './investor-step3.component';

describe('InvestorStep3Component', () => {
  let component: InvestorStep3Component;
  let fixture: ComponentFixture<InvestorStep3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestorStep3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestorStep3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
