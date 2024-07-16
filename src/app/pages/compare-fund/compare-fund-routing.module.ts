import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompareFundComponent } from './compare-fund.component';

const routes: Routes = [{
  path: "",
  component: CompareFundComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompareFundRoutingModule { }
