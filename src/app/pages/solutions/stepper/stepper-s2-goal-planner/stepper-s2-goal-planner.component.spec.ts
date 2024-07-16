import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperS2GoalPlannerComponent } from './stepper-s2-goal-planner.component';

describe('StepperS2GoalPlannerComponent', () => {
  let component: StepperS2GoalPlannerComponent;
  let fixture: ComponentFixture<StepperS2GoalPlannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepperS2GoalPlannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepperS2GoalPlannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
