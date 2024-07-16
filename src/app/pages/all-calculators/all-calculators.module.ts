import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllCalculatorsComponent } from './all-calculators.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { CalculatorsComponent } from './components/calculators/calculators.component';
import { FormulaComponent } from './components/formula/formula.component';
import { FaqComponent } from './components/faq/faq.component';
import { SipComponent } from './calculators/sip/sip.component';
import { TopUpComponent } from './calculators/top-up/top-up.component';
import { RelatedResourcesComponent } from './calculators/components/related-resources/related-resources.component';
import { OtherCalculatorsComponent } from './calculators/components/other-calculators/other-calculators.component';
import { FundAccordionComponent } from './calculators/components/fund-accordion/fund-accordion.component';
import { FundReturnComponent } from './calculators/components/fund-return/fund-return.component';
import { SipCalculatorComponent } from './calculators/components/sip-calculator/sip-calculator.component';
import { SipBreadcrumbComponent } from './calculators/components/sip-breadcrumb/sip-breadcrumb.component';
import { CalculatorFaqComponent } from './calculators/components/calculator-faq/calculator-faq.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared';
import { NgChartsModule } from 'ng2-charts';
import { NgxSliderModule } from 'ngx-slider-v2';
import { SipCalculatorFormComponent } from './calculators/components/sip-calculator-form/sip-calculator-form.component';
import { MoreCalculatorsComponent } from './calculators/components/more-calculators/more-calculators.component';
import { StpComponent } from './calculators/stp/stp.component';
import { SwpComponent } from './calculators/swp/swp.component';
import { LumpsumComponent } from './calculators/lumpsum/lumpsum.component';
import { CagrComponent } from './calculators/cagr/cagr.component';
import { StpCalculatorComponent } from './calculators/components/stp-calculator/stp-calculator.component';
import { SwpCalculatorComponent } from './calculators/components/swp-calculator/swp-calculator.component';
import { CagrCalculatorComponent } from './calculators/components/cagr-calculator/cagr-calculator.component';
import { LumpsumCalculatorComponent } from './calculators/components/lumpsum-calculator/lumpsum-calculator.component';
import { TopUpCalculatorComponent } from './calculators/components/top-up-calculator/top-up-calculator.component';
import { TopUpCalculatorFormComponent } from './calculators/components/top-up-calculator-form/top-up-calculator-form.component';
import { LumpsumCalculatorFormComponent } from './calculators/components/lumpsum-calculator-form/lumpsum-calculator-form.component';
const routes: Routes = [{
  path: "all-calculators",
  component: AllCalculatorsComponent
}];


@NgModule({
  declarations: [
    AllCalculatorsComponent,
    BreadcrumbComponent,
    CalculatorsComponent,
    FormulaComponent,
    FaqComponent,
    SipComponent,
    TopUpComponent,
    RelatedResourcesComponent,
    OtherCalculatorsComponent,
    FundAccordionComponent,
    FundReturnComponent,
    SipCalculatorComponent,
    SipBreadcrumbComponent,
    CalculatorFaqComponent,
    SipCalculatorFormComponent,
    MoreCalculatorsComponent,
    StpComponent,
    SwpComponent,
    LumpsumComponent,
    CagrComponent,
    StpCalculatorComponent,
    SwpCalculatorComponent,
    CagrCalculatorComponent,
    LumpsumCalculatorComponent,
    TopUpCalculatorComponent,
    TopUpCalculatorFormComponent,
    LumpsumCalculatorFormComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    SlickCarouselModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    NgChartsModule,
    NgxSliderModule,
  ]
})
export class AllCalculatorsModule { }

