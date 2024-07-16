import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvestmentCartRoutingModule } from './investment-cart-routing.module';
import { InvestmentCartComponent } from './investment-cart/investment-cart.component';
import { SharedModule } from 'src/app/shared';


@NgModule({
  declarations: [
    InvestmentCartComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    InvestmentCartRoutingModule
  ]
})
export class InvestmentCartModule { }
