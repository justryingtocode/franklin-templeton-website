import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { RemunerationComponent } from './remuneration.component';

const routes: Routes = [{
  path: "",
  component: RemunerationComponent
}];



@NgModule({
  declarations: [
    RemunerationComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    HttpClientModule,
  ]
})
export class RemunerationModule { }
