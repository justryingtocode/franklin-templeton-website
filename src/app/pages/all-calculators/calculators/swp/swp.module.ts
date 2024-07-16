import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwpComponent} from './swp.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [{
  path: "all-calculators/swp",
  component: SwpComponent
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
export class SwpModule { }

