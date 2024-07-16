import { Component } from '@angular/core';

@Component({
  selector: 'app-instant-mailback',
  templateUrl: './instant-mailback.component.html',
  styleUrls: ['./instant-mailback.component.scss']
})
export class InstantMailbackComponent  {
MoreOptions=false;
hidePragraph=true;
toggleMoreOption(){
  this.MoreOptions = !this.MoreOptions;
  this.hidePragraph= !this.hidePragraph
}

fillterDateRange1: boolean = false;
fillterDateRange2: boolean = false;
fillterDateRange3: boolean = false;



periodDateVisible() {
  this.fillterDateRange1= true;
}
periodDateVisible2(){
  this.fillterDateRange2 = true;
}
periodDateVisible3(){
  this.fillterDateRange3 = true;
}


periodDatehide(){
  this.fillterDateRange1= false;
}
periodDatehide2(){
  this.fillterDateRange2 = false;
}
periodDatehide3(){
  this.fillterDateRange3 = false;
}



}
