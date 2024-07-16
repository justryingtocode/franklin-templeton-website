import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: "",
  loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
},
{
  path: "funds",
  loadChildren: () => import('./pages/funds/funds.module').then(m => m.FundsModule)
},
{
  path: 'solutions',
  loadChildren: () => import('./pages/solutions/solutions.module').then(m => m.SolutionsModule)
},
{
  path: "compare-fund/:id",
  loadChildren: () => import('./pages/compare-fund/compare-fund.module').then(m => m.CompareFundModule)
},
{
  path: "knowledge-center",
  loadChildren: () => import('./pages/knowledge-center/knowledge-center.module').then(m => m.KnowledgeCenterModule)
},
{
  path: "knowledge-center/category",
  loadChildren: () => import('./pages/knowledge-center/inner-pages/category-page/category-page.module').then(m => m.CategoryPageModule)
},
{
  path: "knowledge-center/like",
  loadChildren: () => import('./pages/knowledge-center/inner-pages/like/like.module').then(m => m.LikeModule)
},
{
  path: "knowledge-center/wishlist",
  loadChildren: () => import('./pages/knowledge-center/inner-pages/wishcenter/wishcenter.module').then(m => m.WishcenterModule)
},
{
  path: "knowledge-center/article1",
  loadChildren: () => import('./pages/knowledge-center/inner-pages/article1/article1.module').then(m => m.Article1Module)
},
{
  path: "knowledge-center/article2",
  loadChildren: () => import('./pages/knowledge-center/inner-pages/article2/article2.module').then(m => m.Article2Module)
},
{
  path: "knowledge-center/blogs",
  loadChildren: () => import('./pages/knowledge-center/inner-pages/blogs/blogs.module').then(m => m.BlogsModule)
},
{
  path: "knowledge-center/frankly",
  loadChildren: () => import('./pages/knowledge-center/inner-pages/frankly/frankly.module').then(m => m.FranklyModule)
},
{
  path: "knowledge-center/open-learning",
  loadChildren: () => import('./pages/knowledge-center/inner-pages/open-learning/open-learning.module').then(m => m.OpenLearningModule)
},
{
  path: "knowledge-center/market-insight",
  loadChildren: () => import('./pages/knowledge-center/inner-pages/market-insight/market-insigt.module').then(m => m.MarketInsightModule)
},
{
  path: "knowledge-center/podcast",
  loadChildren: () => import('./pages/knowledge-center/inner-pages/podcast/podcast.module').then(m => m.PodcastModule)
},
{
  path: "knowledge-center/glossary",
  loadChildren: () => import('./pages/knowledge-center/inner-pages/glossary/glossary.module').then(m => m.GlossaryModule)
},
{
  path: "knowledge-center/booklets",
  loadChildren: () => import('./pages/knowledge-center/inner-pages/booklets/booklets.module').then(m => m.BookletsModule)
},
{
  path: "knowledge-center/commentaries",
  loadChildren: () => import('./pages/knowledge-center/inner-pages/commentaries/commentaries.module').then(m => m.CommentariesModule)
},
{
  path: "investment-cart",
  loadChildren: () => import('./pages/investment-cart/investment-cart.module').then(m => m.InvestmentCartModule)
},
{
  path: "risk-factors",
  loadChildren: () => import('./pages/risk-factors/risk-factors.module').then(m => m.RiskFactorsModule)
},
{
  path: "media",
  loadChildren: () => import('./pages/media/media.module').then(m => m.MediaModule)
},
{
  path: "privacy",
  loadChildren: () => import('./pages/privacy/privacy.module').then(m => m.PrivacyModule)
},
{
  path: "terms",
  loadChildren: () => import('./pages/terms/terms.module').then(m => m.TermsConditionsModule)
},
{
  path: "disclaimer",
  loadChildren: () => import('./pages/disclaimer/disclaimer.module').then(m => m.DisclaimerModule)
},
{
  path: "help",
  loadChildren: () => import('./pages/help/help.module').then(m => m.HelpModule)
},
{
  path: "feedback",
  loadChildren: () => import('./pages/feedback/feedback.module').then(m => m.FeedbackModule)
},

{
  path: "reports",
  loadChildren: () => import('./pages/reports/reports.module').then(m => m.ReportsModule)
},
{
  path: "search",
  loadChildren: () => import('./pages/search/search.module').then(m => m.SearchModule)
},
{
  path: "search2",
  loadChildren: () => import('./pages/search2/search2.module').then(m => m.Search2Module)
},
{
  path: "AntiCorruption",
  loadChildren: () => import('./pages/anti-corruption/anti-corruption.module').then(m => m.AntiCorruptionModule)
},
{
  path: "about-us",
  loadChildren: () => import('./pages/about-us/about-us.module').then(m => m.AboutUsModule)
},
{
  path: "about-us/differentiate-us",
  loadChildren: () => import('./pages/about-us/inner-pages/differentiate-us/differentiate-us.module').then(m => m.DifferentiateUsModule)
},
{
  path: "about-us/our-people",
  loadChildren: () => import('./pages/about-us/inner-pages/our-people/our-people.module').then(m => m.OurPeopleModule)
},
{
  path: "about-us/single-member/:memberId",
  loadChildren: () => import('./pages/about-us/inner-pages/single-member/single-member.module').then(m => m.SingleMemberModule)
},
{
  path: "about-us/social-responsibility",
  loadChildren: () => import('./pages/about-us/inner-pages/social-responsibility/social-responsibility.module').then(m => m.SocialResponsibilityModule)
},
{
  path: "about-us/who-we-are",
  loadChildren: () => import('./pages/about-us/inner-pages/who-we/who-we.module').then(m => m.WhoWeModule)
},
{
  path: "about-us/csr",
  loadChildren: () => import('./pages/about-us/inner-pages/csr/csr.module').then(m => m.CsrModule)
},
{
  path: "distributor",
  loadChildren: () => import('./pages/distributor/distributor.module').then(m => m.DistributorModule)
},
{
  path: "investor-services/account-statement",
  loadChildren: () => import('./pages/investor-service/service-pages/account-statement/account-statement.module').then(m => m.AccountStatementModule)
},
{
  path: "investor-services/instant-mailback",
  loadChildren: () => import('./pages/investor-service/service-pages/instant-mailback/instant-mailback.module').then(m => m.InstantMailbackModule)
},
{
  path: "investor-services/touch-points",
  loadChildren: () => import('./pages/investor-service/service-pages/touch-points/touch-points.module').then(m => m.TouchPoints2Module)
},
{
  path: "investor-services/locations",
  loadChildren: () => import('./pages/investor-service/service-pages/location/location.module').then(m => m.LocationModule)
},
{
  path: "investor-services/servicing-forms",
  loadChildren: () => import('./pages/investor-service/service-pages/forms-download/forms-download.module').then(m => m.FormsDownloadModule)
},
{
  path: "investor-services/fund-document",
  loadChildren: () => import('./pages/investor-service/service-pages/forms-download2/forms-download2.module').then(m => m.FormsDownload2Module)
},
{
  path: "investor-services/modify-kyc",
  loadChildren: () => import('./pages/investor-service/service-pages/modify-kyc/modify-kyc.module').then(m => m.ModifyKycModule)
},
{
  path: "investor-services/subscribe",
  loadChildren: () => import('./pages/investor-service/service-pages/subscribe-page/subscribe-page.module').then(m => m.SubscribePageModule)
},
{
  path: "investor-services/acc-statment",
  loadChildren: () => import('./pages/investor-service/service-pages/acc-statment/acc-statment.module').then(m => m.AccStatmentModule)
},
{
  path: "investor-services/faq",
  loadChildren: () => import('./pages/investor-service/service-pages/faq/faq.module').then(m => m.ServiceFaqModule)
},
{
  path: "investor-services/redressal",
  loadChildren: () => import('./pages/investor-service/service-pages/redressal/redressal.module').then(m => m.RedressalModule)
},
{
  path: "investor-services/nav-alerts",
  loadChildren: () => import('./pages/investor-service/service-pages/nav-alerts/nav-alerts.module').then(m => m.NAVAlertsModule)
},
{
  path: "investor-services/NAVs",
  loadChildren: () => import('./pages/investor-service/service-pages/idcw/idcw.module').then(m => m.IdcwModule)
},
{
  path: "login",
  loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
},
{
  path: "create-account",
  loadChildren: () => import('./pages/login/inner-pages/create-account/create-account.module').then(m => m.CreateAccountModule)
},
{
  path: "register",
  loadChildren: () => import('./pages/login/inner-pages/register/register.module').then(m => m.RegisterModule)
},
{
  path: "user-register",
  loadChildren: () => import('./pages/login/inner-pages/register2/register2.module').then(m => m.Register2Module)
},
{
  path: "forgot-password",
  loadChildren: () => import('./pages/login/inner-pages/forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule)
},
{
  path: "forgot-user-id",
  loadChildren: () => import('./pages/login/inner-pages/forget-user-id/forget-user-id.module').then(m => m.ForgetUserIdModule)
},
{
  path: "404",
  loadChildren: () => import('./pages/invalid-search/invalid-search.module').then(m => m.InvalidSearchModule)
},
{
  path: "empanel",
  loadChildren: () => import('./pages/empanel/empanel.module').then(m => m.EmpanelModule)
},
{
  path: "forgot-password2",
  loadChildren: () => import('./pages/forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule)
},
{
  path: "remuneration",
  loadChildren: () => import('./pages/remuneration/remuneration.module').then(m => m.RemunerationModule)
},

{
  path: "remuner-disclosure",
  loadChildren: () => import('./pages/remun-disclosure/remun-disclosure.module').then(m => m.RemunDisclosureModule)
},
{
  path: "invest",
  loadChildren: () => import('./pages/login/inner-pages/invest/invest.module').then(m => m.InvestModule)
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking',
    scrollPositionRestoration: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
