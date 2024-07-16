import { Component } from '@angular/core';

@Component({
  selector: 'app-subscribe-page',
  templateUrl: './subscribe-page.component.html',
  styleUrls: ['./subscribe-page.component.scss']
})
export class SubscribePageComponent {

  otpForm:boolean =false;
  accountForm:boolean= true;

  validateForm(){
    this.otpForm = true;
    this.accountForm = false;
  }

  onBack() {
    this.otpForm = false;
    this.accountForm = true;
  }

}
