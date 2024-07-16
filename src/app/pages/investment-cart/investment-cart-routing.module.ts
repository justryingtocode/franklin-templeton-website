import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvestmentCartComponent } from './investment-cart/investment-cart.component';

const routes: Routes = [
  { path: '' , component: InvestmentCartComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvestmentCartRoutingModule { }
