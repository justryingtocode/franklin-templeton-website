import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WatchlistComponent } from './watchlist.component';
import { SharedModule } from 'src/app/shared';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { WatchlistContentComponent } from './components/watchlist-content/watchlist-content.component';
import { WatchlistEmptyComponent } from './components/watchlist-empty/watchlist-empty.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';

const routes: Routes = [{
  path: "watchlist",
  component: WatchlistComponent
}];

@NgModule({
  declarations: [
    WatchlistComponent,
    WatchlistContentComponent,
    WatchlistEmptyComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    SlickCarouselModule
  ]
})
export class watchlistModule { }
