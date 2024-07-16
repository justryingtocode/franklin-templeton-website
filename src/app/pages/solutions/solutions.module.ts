import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolutionsRoutingModule } from './solutions-routing.module';
import { SolutionsComponent } from './solutions.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SolutionContentComponent } from './solution-content/solution-content.component';
import { SharedModule } from 'src/app/shared';
import { SolutionsStepperLayoutComponent } from './solutions-stepper-layout/solutions-stepper-layout.component';
import { StepperComponent } from './stepper/stepper.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { StepperS2GoalPlannerComponent } from './stepper/stepper-s2-goal-planner/stepper-s2-goal-planner.component';
import { NgChartsModule } from 'ng2-charts';
import { StepperS3GoalSummaryComponent } from './stepper/stepper-s3-goal-summary/stepper-s3-goal-summary.component';
@NgModule({
  declarations: [
    SolutionsComponent,
    SolutionContentComponent,
    SolutionsStepperLayoutComponent,
    StepperComponent,
    StepperS2GoalPlannerComponent,
    StepperS3GoalSummaryComponent
  ],
  imports: [
    CommonModule,
    SlickCarouselModule,
    SolutionsRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    NgChartsModule
  ]
})
export class SolutionsModule { }
