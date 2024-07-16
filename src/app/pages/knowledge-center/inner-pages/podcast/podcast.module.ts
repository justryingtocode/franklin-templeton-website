
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared';
import { PodcastComponent} from './podcast.component';

import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [{
    path: "",
    component: PodcastComponent
  }];


@NgModule({
    declarations: [
    ],
    imports: [
      SharedModule,
      CommonModule,
      RouterModule.forChild(routes),
      HttpClientModule,
    ]
  })
export class PodcastModule { }

