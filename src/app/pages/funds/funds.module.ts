import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FundsComponent } from './funds/funds.component';
import { FundDetailsComponent } from './fund-details/fund-details.component';
import { SharedModule } from 'src/app/shared';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { NgChartsModule } from 'ng2-charts';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { MoreDetailsComponent } from './components/more-details/more-details.component';
import { OverviewComponent } from './components/overview/overview.component';
import { PerformanceComponent } from './components/performance/performance.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { FundsRoutingModule } from './funds-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LeadGenFormComponent } from './components/lead-gen-form/lead-gen-form.component';
import { InvestNowFormComponent } from '../home/components/invest-now-form/invest-now-form.component';


@NgModule({
  declarations: [
    FundsComponent,
    FundDetailsComponent,
    BreadcrumbComponent,
    StatisticsComponent,
    OverviewComponent,
    PerformanceComponent,
    PortfolioComponent,
    MoreDetailsComponent,
    LeadGenFormComponent,
  ],
  imports: [
    CommonModule,
    FundsRoutingModule,
    SharedModule,
    SlickCarouselModule,
    NgChartsModule,
    FormsModule,
    ReactiveFormsModule,
    NgCircleProgressModule.forRoot({
      "backgroundGradient": true,
      "radius": 35,
      "space": -7,
      "outerStrokeGradient": true,
      "outerStrokeWidth":7,
      "outerStrokeColor": "#583EE7",
      "outerStrokeGradientStopColor": "#00B6AE",
      "innerStrokeColor": "#fff",
      "innerStrokeWidth":5,
      "animateTitle": false,
      "animationDuration": 1000,
      "showUnits": true,
      "unitsColor": "#00847D",
      "unitsFontSize": "18",
      "titleFontSize": "18",
      "titleColor":"#00847D",
      "showBackground": false,
      "clockwise": true,
      "startFromZero": false,
      "showSubtitle": false,
      "lazy": true,
      "responsive": true,

    
    })
    
  ]
})
export class FundsModule { }
