
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountStatementComponent} from './account-statement.component';

import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [{
  path: "",
  component: AccountStatementComponent
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
export class AccountStatementModule { }

