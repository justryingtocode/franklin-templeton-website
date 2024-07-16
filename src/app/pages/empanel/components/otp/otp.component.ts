import { Component } from '@angular/core';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})
export class OtpComponent {
  showEmpanelSteps : boolean = false;
  hideOtpBox:boolean =true;
  toggleEmpanelSteps(){
    this.showEmpanelSteps = !this.showEmpanelSteps;
    this.hideOtpBox = !this.hideOtpBox
  }
}
