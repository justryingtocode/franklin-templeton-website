
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModifyKycComponent} from './modify-kyc.component';

import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [{
  path: "",
  component: ModifyKycComponent
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
export class ModifyKycModule { }

