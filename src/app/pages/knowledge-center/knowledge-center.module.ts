import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KnowledgeCenterComponent } from './knowledge-center.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { SliderComponent } from './components/slider/slider.component';
import { CategoryComponent } from './components/category/category.component';
import { AcademyComponent } from './components/academy/academy.component';
import { InsightsComponent } from './components/insights/insights.component';
import { StandBoxComponent } from './components/stand-box/stand-box.component';
import { FaqComponent } from './components/faq/faq.component';
import { OpenLearningComponent } from './inner-pages/open-learning/open-learning.component';
import { LearningBannerComponent } from './inner-pages/components/learning-banner/learning-banner.component';
import { LearningCategoryComponent } from './inner-pages/components/learning-category/learning-category.component';
import { Article1Component } from './inner-pages/article1/article1.component';
import { RelatedTagsComponent } from './inner-pages/components/related-tags/related-tags.component';
import { RelatedArticlesComponent } from './inner-pages/components/related-articles/related-articles.component';
import { RelatedVideosComponent } from './inner-pages/components/related-videos/related-videos.component';
import { ArticleContentComponent } from './inner-pages/components/article-content/article-content.component';
import { VideoContentComponent } from './inner-pages/components/video-content/video-content.component';
import { Article2Component } from './inner-pages/article2/article2.component';
import { CategoryContentComponent } from './inner-pages/components/category-content/category-content.component';
import { CategoryAdComponent } from './inner-pages/components/category-ad/category-ad.component';
import { CategoryPageComponent } from './inner-pages/category-page/category-page.component';
import { CategoryFaqComponent } from './inner-pages/components/category-faq/category-faq.component';
import { BlogsComponent } from './inner-pages/blogs/blogs.component';
import { BlogsContentComponent } from './inner-pages/components/blogs-content/blogs-content.component';
import { PodcastComponent } from './inner-pages/podcast/podcast.component';
import { FranklyComponent } from './inner-pages/frankly/frankly.component';
import { BookletsComponent} from './inner-pages/booklets/booklets.component';
import { GlossaryComponent } from './inner-pages/glossary/glossary.component';
import { CommentariesComponent } from './inner-pages/commentaries/commentaries.component';
import { CommentaryContent2Component } from './inner-pages/components/commentary-content/commentary-content.component';
import { FormsModule } from '@angular/forms';
import { MarketInsightComponent } from './inner-pages/market-insight/market-insight.component';
import { LikeComponent } from './inner-pages/like/like.component';
import { WishcenterComponent } from './inner-pages/wishcenter/wishcenter.component';
import { LearningCategory2Component } from './inner-pages/components/learning-category2/learning-category2.component';
const routes: Routes = [{
  path: "",
  component: KnowledgeCenterComponent
}];


@NgModule({
  declarations: [
   
    KnowledgeCenterComponent,
    BreadcrumbComponent,
            SliderComponent,
            CategoryComponent,
            AcademyComponent,
            InsightsComponent,
            StandBoxComponent,
            FaqComponent,
            OpenLearningComponent,
            MarketInsightComponent,
            LearningBannerComponent,
            LearningCategoryComponent,
            Article1Component,
            RelatedTagsComponent,
            RelatedArticlesComponent,
            RelatedVideosComponent,
            ArticleContentComponent,
            VideoContentComponent,
            Article2Component,
            CategoryContentComponent,
            CategoryAdComponent,
            CategoryPageComponent,
            LikeComponent,
            WishcenterComponent,
            CategoryFaqComponent,
            BlogsComponent,
            BlogsContentComponent,
            PodcastComponent,
            FranklyComponent,
            BookletsComponent,
            GlossaryComponent,
            CommentariesComponent,
            CommentaryContent2Component,
            LearningCategory2Component
  ],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    SlickCarouselModule,
    FormsModule
  ]
})
export class KnowledgeCenterModule { }

