import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReportsComponent } from './reports.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared';
import { FormsModule } from '@angular/forms';
const routes: Routes = [{
  path: "",
  component: ReportsComponent
}];



@NgModule({
  declarations: [
    ReportsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    SharedModule,
    FormsModule
    
  ]
})
export class ReportsModule { }
