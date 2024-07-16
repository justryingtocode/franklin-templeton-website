import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared';
import { CommonModule } from '@angular/common';
import { RiskFactorsComponent } from './risk-factors.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [{
  path: "",
  component: RiskFactorsComponent
}];

@NgModule({
  declarations: [
    RiskFactorsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    
  ]
})
export class RiskFactorsModule { }
