
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TouchPoints2Component} from './touch-points.component';

import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [{
  path: "",
  component: TouchPoints2Component
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
export class TouchPoints2Module { }

