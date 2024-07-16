import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SipComponent} from './sip.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared';

const routes: Routes = [{
  path: "all-calculators/sip",
  component: SipComponent
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
export class SipModule { }

