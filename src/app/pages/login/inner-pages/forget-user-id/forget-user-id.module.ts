import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared';
import { HttpClientModule } from '@angular/common/http';
import { ForgetUserIdComponent } from './forget-user-id.component';

const routes: Routes = [{
  path: "",
  component: ForgetUserIdComponent
}];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    HttpClientModule
  ]
})
export class ForgetUserIdModule { }
