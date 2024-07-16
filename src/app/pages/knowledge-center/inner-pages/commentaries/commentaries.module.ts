
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentariesComponent} from './commentaries.component';

import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [{
  path: "",
  component: CommentariesComponent
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
export class CommentariesModule { }

