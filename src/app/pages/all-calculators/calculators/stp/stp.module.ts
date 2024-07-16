import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StpComponent} from './stp.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [{
  path: "all-calculators/stp",
  component: StpComponent
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
export class StpModule { }

