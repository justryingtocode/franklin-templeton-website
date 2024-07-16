
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogsComponent} from './blogs.component';

import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [{
  path: "",
  component: BlogsComponent
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
export class BlogsModule { }

