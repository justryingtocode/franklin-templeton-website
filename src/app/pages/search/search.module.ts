import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search.component';

const routes: Routes = [{
  path: "",
  component: SearchComponent
}];



@NgModule({
  declarations: [],

  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    SharedModule,
    FormsModule
  ]
})
export class SearchModule { }
