
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RedressalComponent} from './redressal.component';

import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [{
  path: "",
  component: RedressalComponent
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
export class RedressalModule { }

