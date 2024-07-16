import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorFaqComponent } from './calculator-faq.component';

describe('CalculatorFaqComponent', () => {
  let component: CalculatorFaqComponent;
  let fixture: ComponentFixture<CalculatorFaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculatorFaqComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculatorFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
