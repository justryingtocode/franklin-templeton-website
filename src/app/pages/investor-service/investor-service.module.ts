import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { InvestorServiceComponent } from './investor-service.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AccountStatementComponent } from './service-pages/account-statement/account-statement.component';
import { InstantMailbackComponent } from './service-pages/instant-mailback/instant-mailback.component';
import { TouchPoints2Component} from './service-pages/touch-points/touch-points.component';
import { Location2Component } from './service-pages/location/location.component';
import { FormsDownloadComponent } from './service-pages/forms-download/forms-download.component';
import { FormsDownload2Component } from './service-pages/forms-download2/forms-download2.component';
import { SubscribeBoxComponent } from './components/subscribe-box/subscribe-box.component';
import { ServiceStandBoxComponent } from './components/service-stand-box/service-stand-box.component';
import { NotificationBanner2Component } from './components/notification-banner2/notification-banner2.component';
import { InvestorSlider2Component } from './components/investor-slider/investor-slider.component';
import { InvestorLinksComponent } from './components/investor-links/investor-links.component';
import { ModifyKycComponent } from './service-pages/modify-kyc/modify-kyc.component';
import {KycStepper2Component } from './components/kyc-stepper/kyc-stepper.component';
import { SubscribePageComponent } from './service-pages/subscribe-page/subscribe-page.component';
import { AccStatmentComponent } from './service-pages/acc-statment/acc-statment.component';
import { NAVAlertsComponent } from './service-pages/nav-alerts/nav-alerts.component';
import { IdcwComponent } from './service-pages/idcw/idcw.component';
const routes: Routes = [{
  path: "investor-services",
  component: InvestorServiceComponent
}];


@NgModule({
  declarations: [
   
    InvestorServiceComponent,
    AccountStatementComponent,
    InstantMailbackComponent,
    TouchPoints2Component,
    Location2Component,
    FormsDownloadComponent,
    FormsDownload2Component,
    SubscribeBoxComponent,
    ServiceStandBoxComponent,
    NotificationBanner2Component,
    InvestorLinksComponent,
    InvestorSlider2Component,
    ModifyKycComponent,
    KycStepper2Component,
    SubscribePageComponent,
    AccStatmentComponent,
    NAVAlertsComponent,
    IdcwComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    SlickCarouselModule,
  ]
})
export class InvestorServiceModule { }

