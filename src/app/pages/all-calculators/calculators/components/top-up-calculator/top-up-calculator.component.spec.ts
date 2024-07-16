import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopUpCalculatorComponent } from './top-up-calculator.component';

describe('TopUpCalculatorComponent', () => {
  let component: TopUpCalculatorComponent;
  let fixture: ComponentFixture<TopUpCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopUpCalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopUpCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
