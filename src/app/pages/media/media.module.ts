import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared';
import { CommonModule } from '@angular/common';
import { MediaComponent} from './media.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MediaArticlesComponent } from './components/media-articles/media-articles.component';
import { MediaReleasesComponent } from './components/media-releases/media-releases.component';
import { FormsModule } from '@angular/forms';


const routes: Routes = [{
  path: "",
  component: MediaComponent
}];

@NgModule({
  declarations: [
    MediaComponent,
    MediaArticlesComponent,
    MediaReleasesComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    FormsModule
  ]
})
export class MediaModule { }
