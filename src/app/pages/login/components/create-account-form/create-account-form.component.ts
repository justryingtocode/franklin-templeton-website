import { Component } from '@angular/core';

@Component({
  selector: 'app-create-account-form',
  templateUrl: './create-account-form.component.html',
  styleUrls: ['./create-account-form.component.scss']
})
export class CreateAccountFormComponent {
  isChecked: boolean = false;
  Indian: number = 0;
  resendOtpRequest: boolean = false;
  submit:boolean = true;

  otpPage:boolean = false;
  createAccountPage:boolean = true;
  constructor() {
  }

  backFromOtp(){
    this.otpPage= false;
    this.createAccountPage = true;
    this.submit = true;
  }

  onSubmit() {
    this.otpPage= true;
    this.createAccountPage = false;
    this.submit = false;
    // this.backSubmit = true;
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
  resendOTPline(){
    this.resendOtpRequest = true
  }
}
