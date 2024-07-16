import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared';
import { CommonModule } from '@angular/common';
import { FeedbackComponent} from './feedback.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


const routes: Routes = [{
  path: "",
  component: FeedbackComponent
}];

@NgModule({
  declarations: [
    FeedbackComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    FormsModule
  ]
})
export class FeedbackModule { }
