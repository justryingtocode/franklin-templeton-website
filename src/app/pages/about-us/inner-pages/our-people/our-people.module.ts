import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared';
import { CommonModule } from '@angular/common';
import { OurPeopleComponent} from './our-people.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [{
  path: "",
  component: OurPeopleComponent
}];

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    HttpClientModule,
  ]
})
export class OurPeopleModule { }
