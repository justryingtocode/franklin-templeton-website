import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketInsightComponent} from './market-insight.component';

import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared';

const routes: Routes = [{
  path: "",
  component: MarketInsightComponent
}];


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    SharedModule
  ]
})
export class MarketInsightModule { }

