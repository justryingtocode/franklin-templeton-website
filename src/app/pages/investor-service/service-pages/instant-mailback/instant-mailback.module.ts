import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstantMailbackComponent} from './instant-mailback.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
const routes: Routes = [{
  path: "",
  component: InstantMailbackComponent
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
export class InstantMailbackModule { }

