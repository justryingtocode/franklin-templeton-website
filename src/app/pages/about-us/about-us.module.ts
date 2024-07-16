import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FormsModule } from '@angular/forms';
import { AboutUsComponent} from './about-us.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { WhoWeComponent } from './inner-pages/who-we/who-we.component';
import { DifferentiateUsComponent} from './inner-pages/differentiate-us/differentiate-us.component';
import { OurPeopleComponent } from './inner-pages/our-people/our-people.component';
import { SingleMemberComponent } from './inner-pages/single-member/single-member.component';
import { SocialResponsibilityComponent } from './inner-pages/social-responsibility/social-responsibility.component';
import { CsrComponent} from './inner-pages/csr/csr.component';
const routes: Routes = [{
  path: "",
  component: AboutUsComponent
}];

@NgModule({
  declarations: [
    AboutUsComponent,
    WhoWeComponent,
    DifferentiateUsComponent,
    OurPeopleComponent,
    SingleMemberComponent,
    SocialResponsibilityComponent,
    CsrComponent
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
export class AboutUsModule { }
