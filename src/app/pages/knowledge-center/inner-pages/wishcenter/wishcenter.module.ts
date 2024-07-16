
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishcenterComponent} from './wishcenter.component';

import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [{
  path: "",
  component: WishcenterComponent
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
export class WishcenterModule { }

