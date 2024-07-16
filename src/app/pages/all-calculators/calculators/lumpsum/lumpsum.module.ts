import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LumpsumComponent} from './lumpsum.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [{
  path: "all-calculators/lumpsum",
  component: LumpsumComponent
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
export class LumpsumModule { }

