import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopUpCalculatorFormComponent } from './top-up-calculator-form.component';

describe('TopUpCalculatorFormComponent', () => {
  let component: TopUpCalculatorFormComponent;
  let fixture: ComponentFixture<TopUpCalculatorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopUpCalculatorFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopUpCalculatorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
