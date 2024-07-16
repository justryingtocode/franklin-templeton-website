import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { RemunDisclosureComponent } from './remun-disclosure.component';
import { DisclosureStepsComponent } from './components/disclosure-steps/disclosure-steps.component';
import { DisclosureStep1Component } from './components/disclosure-step1/disclosure-step1.component';
import { DisclosureStep2Component } from './components/disclosure-step2/disclosure-step2.component';
import { DisclosureStep3Component } from './components/disclosure-step3/disclosure-step3.component';
import { DisclosureStep4Component } from './components/disclosure-step4/disclosure-step4.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [{
  path: "",
  component: RemunDisclosureComponent
}];



@NgModule({
  declarations: [
    RemunDisclosureComponent,
    DisclosureStepsComponent,
    DisclosureStep1Component,
    DisclosureStep2Component,
    DisclosureStep3Component,
    DisclosureStep4Component,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class RemunDisclosureModule { }
