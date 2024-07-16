import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestorStep4Component } from './investor-step4.component';

describe('InvestorStep4Component', () => {
  let component: InvestorStep4Component;
  let fixture: ComponentFixture<InvestorStep4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestorStep4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestorStep4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
