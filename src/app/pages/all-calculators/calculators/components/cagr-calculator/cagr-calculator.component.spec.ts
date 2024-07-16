import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CagrCalculatorComponent } from './cagr-calculator.component';

describe('CagrCalculatorComponent', () => {
  let component: CagrCalculatorComponent;
  let fixture: ComponentFixture<CagrCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CagrCalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CagrCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
