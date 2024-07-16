
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscribePageComponent} from './subscribe-page.component';

import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [{
  path: "",
  component: SubscribePageComponent
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
export class SubscribePageModule { }

