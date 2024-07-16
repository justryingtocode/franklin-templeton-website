import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FormsModule } from '@angular/forms';
import { DistributorComponent} from './distributor.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HeroComponent } from './components/hero/hero.component';
import { QuikLinksComponent } from './components/quik-links/quik-links.component';
import { DistributorFeaturesComponent } from './components/distributor-features/distributor-features.component';
import { DigitalOffersComponent } from './components/digital-offers/digital-offers.component';
import { DistributorEventsComponent } from './components/distributor-events/distributor-events.component';
import { DistributorTestimonialsComponent } from './components/distributor-testimonials/distributor-testimonials.component';
import { DistributorFaqComponent } from './components/distributor-faq/distributor-faq.component';
import { DistributorFormComponent } from './components/distributor-form/distributor-form.component';

const routes: Routes = [{
  path: "",
  component: DistributorComponent
}];

@NgModule({
  declarations: [
    DistributorComponent,
    HeroComponent,
    QuikLinksComponent,
    DistributorFeaturesComponent,
    DigitalOffersComponent,
    DistributorEventsComponent,
    DistributorTestimonialsComponent,
    DistributorFaqComponent,
    DistributorFormComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    SlickCarouselModule,
    FormsModule
  ]
})
export class DistributorModule { }
