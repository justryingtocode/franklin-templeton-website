
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccStatmentComponent} from './acc-statment.component';

import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [{
  path: "",
  component: AccStatmentComponent
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
export class AccStatmentModule { }

