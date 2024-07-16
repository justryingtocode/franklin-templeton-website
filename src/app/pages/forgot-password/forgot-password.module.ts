import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgotPasswordComponent } from './forgot-password.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared';
import { LinkExpiredComponent } from './components/link-expired/link-expired.component';
import { ResetStep1Component } from './components/reset-step1/reset-step1.component';
import { ResetStep2Component } from './components/reset-step2/reset-step2.component';
import { ResetStep3Component } from './components/reset-step3/reset-step3.component';
import { ResetStep4Component } from './components/reset-step4/reset-step4.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

const routes: Routes = [{
  path: "",
  component: ForgotPasswordComponent
}];

@NgModule({
  declarations: [
    ForgotPasswordComponent,
    LinkExpiredComponent,
    ResetStep1Component,
    ResetStep2Component,
    ResetStep3Component,
    ResetStep4Component
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    FormsModule,
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ForgotPasswordModule { }
