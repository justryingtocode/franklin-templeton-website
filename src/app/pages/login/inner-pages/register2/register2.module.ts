import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared';
import { CommonModule } from '@angular/common';
import { Register2Component} from './register2.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [{
  path: "",
  component: Register2Component
}];

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    HttpClientModule,
  ]
})
export class Register2Module { }
