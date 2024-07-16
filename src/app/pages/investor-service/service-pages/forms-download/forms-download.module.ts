import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsDownloadComponent} from './forms-download.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
const routes: Routes = [{
  path: "",
  component: FormsDownloadComponent
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
export class FormsDownloadModule { }

