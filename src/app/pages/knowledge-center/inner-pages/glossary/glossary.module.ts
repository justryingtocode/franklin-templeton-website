
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlossaryComponent} from './glossary.component';

import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [{
  path: "",
  component: GlossaryComponent
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
export class GlossaryModule { }

