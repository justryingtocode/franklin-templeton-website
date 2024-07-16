import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompareFundRoutingModule } from './compare-fund-routing.module';
import { CompareFundComponent } from './compare-fund.component';
import { Routes } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { AccordiandetailsComponent } from './accordiandetails/accordiandetails.component';
import { AddFundComponent } from './add-fund/add-fund.component';
import { ComapreMutualFundComponent } from './comapre-mutual-fund/comapre-mutual-fund.component';
import { NgChartsModule,NgChartsConfiguration } from 'ng2-charts';
import { SharedModule } from 'src/app/shared';



@NgModule({
  declarations: [
    CompareFundComponent,
    AccordiandetailsComponent,
    AddFundComponent,
    ComapreMutualFundComponent
  ],
  imports: [
    CommonModule,
    CompareFundRoutingModule,
    SlickCarouselModule,
    NgChartsModule,
    SharedModule
  ],
  providers:[
    { provide: NgChartsConfiguration, useValue: { generateColors: false }}
  ]
})
export class CompareFundModule { }
