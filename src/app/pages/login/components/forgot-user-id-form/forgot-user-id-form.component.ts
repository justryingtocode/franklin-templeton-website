import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-user-id-form',
  templateUrl: './forgot-user-id-form.component.html',
  styleUrls: ['./forgot-user-id-form.component.scss']
})
export class ForgotUserIdFormComponent implements OnInit {
  distributorLogin: boolean = true;
  investorLogin: boolean = false;
  otpScreen: boolean = true;
  isChecked: boolean = false;
  usePan: any = 0;
  submitclicked: boolean = true;
  submitclicked2: boolean = true;

  forgotButton: boolean = true;
  otpButton: boolean = false;

  investerForgot: boolean = true;

  distributorForgot: boolean = true;

  otpLink: boolean = false;



  ngOnInit(): void {
    let url = window.location.href;
    console.log(url)
    if (url.indexOf('distributor') > -1) {
      this.distributorLogin = false;
      this.investorLogin = true;
    }
  }


  toggleDistributorLogin() {
    this.distributorLogin = !this.distributorLogin;
    this.investorLogin = !this.investorLogin;
 
  }


  handleFormSubmit() {
    if (this.distributorLogin) {
      this.otpLink = true;
      this.investerForgot = false
      this.distributorForgot = false;
      this.usePan = 0;

    } else if (this.investorLogin) {
      this.otpLink = true;
      this.investerForgot = false
      this.distributorForgot = false;
    }
    this.forgotButton = false;
    this.otpButton = true;
  }



  // -----------------------
  // otp masked code
  otpInput: string = ''; // variable to hold the OTP input

  // Function to mask OTP input
  handleInput(event: any) {
    const input = event.target;
    const trimmed = input.value.replace(/\s+/g, ''); // Remove whitespace
    if (trimmed.length > 4) {
      input.value = trimmed.slice(0, 4); // Limit to 4 characters
    }
    this.otpInput = trimmed.replace(/./g, '*'); // Mask the input value with asterisks
  }

  
}