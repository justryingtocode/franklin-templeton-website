import { Component } from '@angular/core';

@Component({
  selector: 'app-account-statement',
  templateUrl: './account-statement.component.html',
  styleUrls: ['./account-statement.component.scss']
})
export class AccountStatementComponent {


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
