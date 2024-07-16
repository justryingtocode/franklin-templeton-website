import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsDownload2Component} from './forms-download2.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
const routes: Routes = [{
  path: "",
  component: FormsDownload2Component
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
export class FormsDownload2Module { }

