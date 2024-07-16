import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SipCalculatorFormComponent } from './sip-calculator-form.component';

describe('SipCalculatorFormComponent', () => {
  let component: SipCalculatorFormComponent;
  let fixture: ComponentFixture<SipCalculatorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SipCalculatorFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SipCalculatorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
