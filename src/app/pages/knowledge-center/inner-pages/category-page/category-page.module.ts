
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryPageComponent} from './category-page.component';

import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [{
  path: "",
  component: CategoryPageComponent
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
export class CategoryPageModule { }

