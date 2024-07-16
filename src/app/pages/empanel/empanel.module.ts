import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { EmpanelComponent} from './empanel.component';
import { StepsComponent } from './components/steps/steps.component';
import { OtpComponent } from './components/otp/otp.component';
import { Step1Component } from './components/step1/step1.component';
import { Step2Component } from './components/step2/step2.component';
import { Step3Component } from './components/step3/step3.component';
import { Step4Component } from './components/step4/step4.component';
import { Step5Component } from './components/step5/step5.component';
import { Step6Component } from './components/step6/step6.component';
import { Step7Component } from './components/step7/step7.component';
import { FormsModule } from '@angular/forms';
const routes: Routes = [{
  path: "",
  component: EmpanelComponent
}];

@NgModule({
  declarations: [
    EmpanelComponent,
    StepsComponent,
    OtpComponent,
    Step1Component,
    Step2Component,
    Step3Component,
    Step4Component,
    Step5Component,
    Step6Component,
    Step7Component
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    FormsModule
  ]
})
export class EmpanelModule { }
