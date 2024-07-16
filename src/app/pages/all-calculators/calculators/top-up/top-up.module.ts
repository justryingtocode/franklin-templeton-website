import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopUpComponent} from './top-up.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [{
  path: "all-calculators/TopUp",
  component: TopUpComponent
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
export class TopUpModule { }

