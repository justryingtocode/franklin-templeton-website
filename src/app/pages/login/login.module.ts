import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent} from './login.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AccessWaysComponent } from './components/access-ways/access-ways.component';
import { FeaturesComponent } from './components/features/features.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ForgotFormComponent } from './components/forgot-form/forgot-form.component';
import { CreateAccountComponent } from './inner-pages/create-account/create-account.component';
import { RegisterComponent } from './inner-pages/register/register.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { CreateAccountFormComponent } from './components/create-account-form/create-account-form.component';
import { InvestComponent } from './inner-pages/invest/invest.component';
import { InvestFormComponent } from './components/invest-form/invest-form.component';
import { ForgotPasswordComponent } from './inner-pages/forgot-password/forgot-password.component';
import { Register2Component } from './inner-pages/register2/register2.component';
import { Step1Component } from './components/step1/step1.component';
import { Step2Component } from './components/step2/step2.component';
import { Step3Component } from './components/step3/step3.component';
import { StepsComponent } from './components/steps/steps.component';
import { ForgetUserIdComponent } from './inner-pages/forget-user-id/forget-user-id.component';
import { ForgotUserIdFormComponent } from './components/forgot-user-id-form/forgot-user-id-form.component';
import { InvestorStepsComponent } from './components/investor-steps/investor-steps.component';
import { InvestorStep1Component } from './components/investor-step1/investor-step1.component';
import { InvestorStep2Component } from './components/investor-step2/investor-step2.component';
import { InvestorStep3Component } from './components/investor-step3/investor-step3.component';
import { InvestorStep4Component } from './components/investor-step4/investor-step4.component';
const routes: Routes = [{
  path: "",
  component: LoginComponent
}];

@NgModule({
  declarations: [
    LoginComponent,
    AccessWaysComponent,
    FeaturesComponent,
    LoginFormComponent,
    ForgotFormComponent,
    ForgotPasswordComponent,
    CreateAccountComponent,
    RegisterFormComponent,
    CreateAccountFormComponent,
    RegisterComponent,
    InvestComponent,
    InvestFormComponent,
    Register2Component,
    Step1Component,
    Step2Component,
    Step3Component,
    StepsComponent,
    ForgetUserIdComponent,
    ForgotUserIdFormComponent,
    InvestorStepsComponent,
    InvestorStep1Component,
    InvestorStep2Component,
    InvestorStep3Component,
    InvestorStep4Component
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    SlickCarouselModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LoginModule { }
