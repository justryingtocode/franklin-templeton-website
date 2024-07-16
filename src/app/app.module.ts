import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared';
import { AllCalculatorsModule } from './pages/all-calculators/all-calculators.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CompareFundModule } from './pages/compare-fund/compare-fund.module';
import { InvestmentCartModule } from './pages/investment-cart/investment-cart.module';
import { KnowledgeCenterModule } from './pages/knowledge-center/knowledge-center.module';
import { OpenLearningModule } from './pages/knowledge-center/inner-pages/open-learning/open-learning.module';
import { MarketInsightModule} from './pages/knowledge-center/inner-pages/market-insight/market-insigt.module';
import { Article1Module } from './pages/knowledge-center/inner-pages/article1/article1.module';
import { Article2Module } from './pages/knowledge-center/inner-pages/article2/article2.module';
import { CategoryPageModule } from './pages/knowledge-center/inner-pages/category-page/category-page.module';
import { LikeModule } from './pages/knowledge-center/inner-pages/like/like.module';
import { BlogsModule } from './pages/knowledge-center/inner-pages/blogs/blogs.module';
import { watchlistModule } from './pages/watchlist/watchlist.module';
import { SipModule } from './pages/all-calculators/calculators/sip/sip.module';
import { StpModule } from './pages/all-calculators/calculators/stp/stp.module';
import { SwpModule } from './pages/all-calculators/calculators/swp/swp.module';
import { CagrModule } from './pages/all-calculators/calculators/cagr/cagr.module';
import { LumpsumModule } from './pages/all-calculators/calculators/lumpsum/lumpsum.module';
import { TopUpModule } from './pages/all-calculators/calculators/top-up/top-up.module';
import { RiskFactorsModule } from './pages/risk-factors/risk-factors.module';
import { TermsConditionsModule } from './pages/terms/terms.module';
import { PrivacyModule  } from './pages/privacy/privacy.module';
import { HelpModule  } from './pages/help/help.module';
import { FeedbackModule  } from './pages/feedback/feedback.module';
import { DisclaimerModule  } from './pages/disclaimer/disclaimer.module';
import { MediaModule } from './pages/media/media.module';
import { AntiCorruptionModule} from './pages/anti-corruption/anti-corruption.module';
import { InvestorServiceModule } from './pages/investor-service/investor-service.module';
import { AccountStatementModule } from './pages/investor-service/service-pages/account-statement/account-statement.module';

import { InstantMailbackModule } from './pages/investor-service/service-pages/instant-mailback/instant-mailback.module';
import { TouchPoints2Module } from './pages/investor-service/service-pages/touch-points/touch-points.module';
import { LocationModule } from './pages/investor-service/service-pages/location/location.module';
import { FormsDownloadModule } from './pages/investor-service/service-pages/forms-download/forms-download.module';
import { FormsDownload2Module } from './pages/investor-service/service-pages/forms-download2/forms-download2.module';
import { PodcastModule } from './pages/knowledge-center/inner-pages/podcast/podcast.module';
import { FranklyModule} from './pages/knowledge-center/inner-pages/frankly/frankly.module';
import { ModifyKycModule } from './pages/investor-service/service-pages/modify-kyc/modify-kyc.module';
import { SubscribePageModule } from './pages/investor-service/service-pages/subscribe-page/subscribe-page.module';
import { AccStatmentModule } from './pages/investor-service/service-pages/acc-statment/acc-statment.module';

// Modules
import { FormsModule } from '@angular/forms';
import { RedressalModule } from './pages/investor-service/service-pages/redressal/redressal.module';
import { ServiceFaqModule } from './pages/investor-service/service-pages/faq/faq.module';
import { GlossaryModule } from './pages/knowledge-center/inner-pages/glossary/glossary.module';
import { BookletsModule } from './pages/knowledge-center/inner-pages/booklets/booklets.module';
import { NAVAlertsModule } from './pages/investor-service/service-pages/nav-alerts/nav-alerts.module';
import { IdcwModule } from './pages/investor-service/service-pages/idcw/idcw.module';
import { CommentariesModule } from './pages/knowledge-center/inner-pages/commentaries/commentaries.module';
import { WishcenterModule } from './pages/knowledge-center/inner-pages/wishcenter/wishcenter.module';
import { AboutUsModule } from './pages/about-us/about-us.module';
import { WhoWeModule} from './pages/about-us/inner-pages/who-we/who-we.module';
import { DifferentiateUsModule } from './pages/about-us/inner-pages/differentiate-us/differentiate-us.module';
import { OurPeopleModule } from './pages/about-us/inner-pages/our-people/our-people.module';
import { SingleMemberModule } from './pages/about-us/inner-pages/single-member/single-member.module';
import { SocialResponsibilityModule } from './pages/about-us/inner-pages/social-responsibility/social-responsibility.module';
import { DistributorModule } from './pages/distributor/distributor.module';
import { ReportsModule } from './pages/reports/reports.module';
import { CommonModule } from '@angular/common';
import { CsrModule } from './pages/about-us/inner-pages/csr/csr.module';
import { LoginModule } from './pages/login/login.module';
import { CreateAccountModule } from './pages/login/inner-pages/create-account/create-account.module';
import { RegisterModule } from './pages/login/inner-pages/register/register.module';
import { InvalidSearchModule } from './pages/invalid-search/invalid-search.module';
import { EmpanelModule } from './pages/empanel/empanel.module';
import { InvestModule } from './pages/login/inner-pages/invest/invest.module';
import { Register2Module} from './pages/login/inner-pages/register2/register2.module';
import { SearchModule } from './pages/search/search.module';
import { Search2Module } from './pages/search2/search2.module';
import { RemunerationModule } from './pages/remuneration/remuneration.module';
@NgModule({ 
  declarations: [
    AppComponent,
   
  ],
  imports: [
    CommonModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    SharedModule.forRoot(),
    AllCalculatorsModule,
    BrowserAnimationsModule,
    CompareFundModule,
    KnowledgeCenterModule,
    OpenLearningModule,
    MarketInsightModule,
    Article1Module,
    Article2Module,
    CategoryPageModule,
    LikeModule,
    WishcenterModule,
    BlogsModule,
    InvestmentCartModule,
    watchlistModule,
    SipModule,
    StpModule,
    SwpModule,
    CagrModule,
    LumpsumModule,
    TopUpModule,
    RiskFactorsModule,
    TermsConditionsModule,
    PrivacyModule,
    FeedbackModule,
    DisclaimerModule,
    HelpModule,
    MediaModule,
    AntiCorruptionModule,
    InvestorServiceModule,
    AccountStatementModule,
    InstantMailbackModule,
    TouchPoints2Module,
    LocationModule,
    FormsDownloadModule,
    FormsDownload2Module,
    PodcastModule,
    FranklyModule,
    ModifyKycModule,
    SubscribePageModule,
    AccStatmentModule,
    FormsModule,
    RedressalModule,
    ServiceFaqModule,
    GlossaryModule,
    BookletsModule,
    NAVAlertsModule,
    IdcwModule,
    CommentariesModule,
    AboutUsModule,
    WhoWeModule,
    DifferentiateUsModule,
    OurPeopleModule,
    SingleMemberModule,
    SocialResponsibilityModule,
    DistributorModule,
    CsrModule,
    LoginModule,
    CreateAccountModule,
    RegisterModule,
    InvalidSearchModule,
    EmpanelModule,
    InvestModule,
    Register2Module,
    ReportsModule,
    SearchModule,
    Search2Module,
    RemunerationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
