import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestorStep2Component } from './investor-step2.component';

describe('InvestorStep2Component', () => {
  let component: InvestorStep2Component;
  let fixture: ComponentFixture<InvestorStep2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestorStep2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestorStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
