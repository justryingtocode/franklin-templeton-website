import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SolutionsComponent } from './solutions.component';
import { SolutionsStepperLayoutComponent } from './solutions-stepper-layout/solutions-stepper-layout.component';
const routes: Routes = [
  {
    path: '',
    component: SolutionsComponent
  },
  {
    path: "content/:solutionId",
    component: SolutionsStepperLayoutComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolutionsRoutingModule { }
