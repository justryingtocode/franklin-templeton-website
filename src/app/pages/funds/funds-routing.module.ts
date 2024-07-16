import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FundsComponent } from './funds/funds.component';
import { FundDetailsComponent } from './fund-details/fund-details.component';

const routes: Routes = [{
  path: "",
  component: FundsComponent
},
{
    path: ":id",
    component: FundDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FundsRoutingModule { }
