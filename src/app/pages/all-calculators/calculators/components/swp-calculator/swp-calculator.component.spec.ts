import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwpCalculatorComponent } from './swp-calculator.component';

describe('SwpCalculatorComponent', () => {
  let component: SwpCalculatorComponent;
  let fixture: ComponentFixture<SwpCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwpCalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwpCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
