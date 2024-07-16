
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdcwComponent} from './idcw.component';

import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [{
  path: "",
  component: IdcwComponent
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
export class IdcwModule { }

