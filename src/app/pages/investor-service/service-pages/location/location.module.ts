
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Location2Component} from './location.component';

import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [{
  path: "",
  component: Location2Component
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
export class LocationModule { }

