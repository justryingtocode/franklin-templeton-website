
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Article2Component} from './article2.component';

import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [{
  path: "",
  component: Article2Component
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
export class Article2Module { }

