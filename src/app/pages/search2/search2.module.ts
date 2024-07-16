import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Search2RoutingModule } from './search2-routing.module';
import { SearchcomComponent } from './searchcom/searchcom.component';
import { SharedModule } from 'src/app/shared';


@NgModule({
  declarations: [
    SearchcomComponent
  ],
  imports: [
    CommonModule,
    Search2RoutingModule,
    SharedModule
  ]
})
export class Search2Module { }
