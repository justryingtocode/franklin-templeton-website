
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NAVAlertsComponent} from './nav-alerts.component';

import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [{
  path: "",
  component: NAVAlertsComponent
}];


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
  ]
})
export class NAVAlertsModule { }

