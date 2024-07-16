import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared';
import { CommonModule } from '@angular/common';
import { DisclaimerComponent} from './disclaimer.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [{
  path: "",
  component: DisclaimerComponent
}];

@NgModule({
  declarations: [
    DisclaimerComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    HttpClientModule,
  ]
})
export class DisclaimerModule { }
