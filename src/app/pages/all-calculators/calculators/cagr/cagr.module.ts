import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CagrComponent} from './cagr.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [{
  path: "all-calculators/cagr",
  component: CagrComponent
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
export class CagrModule { }

