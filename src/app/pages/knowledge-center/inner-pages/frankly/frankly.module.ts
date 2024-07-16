
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FranklyComponent} from './frankly.component';
import { FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [{
  path: "",
  component: FranklyComponent
}];


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    FormsModule
  ]
})
export class FranklyModule { }

