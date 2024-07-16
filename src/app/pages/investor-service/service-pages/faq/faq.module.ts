
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceFaqComponent} from './faq.component';

import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [{
  path: "",
  component: ServiceFaqComponent
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
export class ServiceFaqModule { }

