import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpenLearningComponent} from './open-learning.component';

import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [{
  path: "",
  component: OpenLearningComponent
}];


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
  ]
})
export class OpenLearningModule { }

