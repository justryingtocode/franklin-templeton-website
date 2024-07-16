import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { BannerComponent } from './components/banner/banner.component';
import { RouterModule, Routes } from '@angular/router';
import { NotificationBannerComponent } from './components/notification-banner/notification-banner.component';
import { FundsComponent } from './components/funds/funds.component';
import { GoalsComponent } from './components/goals/goals.component';
import { ServicesComponent } from './components/services/services.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { LatestUpdatesComponent } from './components/latest-updates/latest-updates.component';
import { FaqComponent } from './components/faq/faq.component';
import { InvestNowFormComponent } from './components/invest-now-form/invest-now-form.component';
import { LocationsComponent } from './components/locations/locations.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { DigitizeWealthComponent } from './components/digitize-wealth/digitize-wealth.component';
import { FormsModule } from '@angular/forms';
// import { DownloadComponent } from './components/download-options/download.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared';
import { HomeSidePopupComponent } from 'src/app/shared/components/home-side-popup/home-side-popup.component';

const routes: Routes = [{
  path: "",
  component: HomeComponent
}];


@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    NotificationBannerComponent,
    FundsComponent,
    GoalsComponent,
    ServicesComponent,
    BlogsComponent,
    LatestUpdatesComponent,
    FaqComponent,
    // InvestNowFormComponent,
    LocationsComponent,
    DigitizeWealthComponent,
  
    // DownloadComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SlickCarouselModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ]
})
export class HomeModule { }
