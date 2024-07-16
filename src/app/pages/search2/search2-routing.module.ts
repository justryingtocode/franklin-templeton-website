import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchcomComponent } from './searchcom/searchcom.component';

const routes: Routes = [
  { path: '' , component: SearchcomComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Search2RoutingModule { }
