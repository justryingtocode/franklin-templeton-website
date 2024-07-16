import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperS3GoalSummaryComponent } from './stepper-s3-goal-summary.component';

describe('StepperS3GoalSummaryComponent', () => {
  let component: StepperS3GoalSummaryComponent;
  let fixture: ComponentFixture<StepperS3GoalSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepperS3GoalSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepperS3GoalSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
