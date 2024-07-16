import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgToggleModule } from 'ng-toggle-button';
import { NgxStarsModule } from 'ngx-stars';
import { HeaderComponent,  FooterComponent,CartComponent} from './layout/index'
import { RouterModule } from '@angular/router';
import { CalculatorFormComponent } from './components/calculator-form/calculator-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CallBackFormComponent } from './components/call-back-form/call-back-form.component';
import { DownloadComponent } from './components/download-options/download.component';
import { TwoDecimalOnlyDirective } from './directive/decimal-only.directive';
import { FundCard1Component } from './components/fund-card1/fund-card1.component';
import { FundCard2Component } from './components/fund-card2/fund-card2.component';
import { AllFundsComponent } from './components/all-funds/all-funds.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { NgxSliderModule } from 'ngx-slider-v2';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonService } from './services/common.service';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { ConfirmationDialogService } from './components/confirmation-dialog/confirmation-dialog.service';
import { AddFundDataComponent } from './components/add-fund-data/add-fund-data.component';
import { StandpageComponent } from './components/standpage/standpage.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { EmptyPageComponent } from './components/empty-page/empty-page.component';
import { KnowledgeCenterModalComponent } from './components/knowledge-center-modal/knowledge-center-modal.component';
import { TestYourLearningComponent } from './components/test-your-learning/test-your-learning.component';
import { ImintrestedformComponent } from './components/imintrestedform/imintrestedform.component';
import { EmailUsFormComponent } from './components/email-us-form/email-us-form.component';
import { SpeakToUsDataComponent } from './components/speak-to-us-data/speak-to-us-data.component';
import { SearchDataComponent } from './components/search-data/search-data.component';
import { HomeSidePopupComponent } from './components/home-side-popup/home-side-popup.component';
import { InvestNowFormComponent } from '../pages/home/components/invest-now-form/invest-now-form.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CartComponent,
    CalculatorFormComponent,
    CallBackFormComponent,
    DownloadComponent,
    TwoDecimalOnlyDirective,
    FundCard1Component,
    FundCard2Component,
    AllFundsComponent,
    DatePickerComponent,
    ConfirmationDialogComponent,
    AddFundDataComponent,
    StandpageComponent,
    EmptyPageComponent,
    KnowledgeCenterModalComponent,
    TestYourLearningComponent,
    ImintrestedformComponent,
    EmailUsFormComponent,
    SpeakToUsDataComponent,
    SearchDataComponent,
    HomeSidePopupComponent,
    InvestNowFormComponent
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    NgxSliderModule,
    FormsModule,
    NgbModule,
    SlickCarouselModule,
    NgToggleModule,
    NgxStarsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    CalculatorFormComponent,
    CallBackFormComponent,
    DownloadComponent,
    TwoDecimalOnlyDirective,
    FundCard1Component,
    FundCard2Component,
    AllFundsComponent,
    DatePickerComponent,
    CartComponent,
    AddFundDataComponent,
    StandpageComponent,
    EmptyPageComponent,
    KnowledgeCenterModalComponent,
    TestYourLearningComponent,
    ImintrestedformComponent,
    SearchDataComponent,
    HomeSidePopupComponent,
    InvestNowFormComponent
    
  ]
})
export class SharedModule { 
  static forRoot(): ModuleWithProviders<any> { //  forRoot(config: UserServiceConfig)
    return {
        ngModule: SharedModule,
        providers: [CommonService, ConfirmationDialogService ],
        // entryComponents: [ConfirmationDialogComponent]
    }
  }
}
