import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { InvalidSearchComponent} from './invalid-search.component';

const routes: Routes = [{
  path: "",
  component: InvalidSearchComponent
}];

@NgModule({
  declarations: [
    InvalidSearchComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    HttpClientModule,
  ]
})
export class InvalidSearchModule { }
