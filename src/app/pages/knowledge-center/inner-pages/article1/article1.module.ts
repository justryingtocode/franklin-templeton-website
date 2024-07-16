
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Article1Component} from './article1.component';

import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [{
  path: "",
  component: Article1Component
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
export class Article1Module { }

