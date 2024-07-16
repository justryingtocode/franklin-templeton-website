import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StpCalculatorComponent } from './stp-calculator.component';

describe('StpCalculatorComponent', () => {
  let component: StpCalculatorComponent;
  let fixture: ComponentFixture<StpCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StpCalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StpCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
