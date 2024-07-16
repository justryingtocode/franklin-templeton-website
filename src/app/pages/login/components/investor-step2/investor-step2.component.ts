import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
export interface stepper {
  id: number,
  hasTraversed: boolean
}
@Component({
  selector: 'app-investor-step2',
  templateUrl: './investor-step2.component.html',
  styleUrls: ['./investor-step2.component.scss']
})
export class InvestorStep2Component implements OnInit{
  @Output() backToStepper: EventEmitter<any> = new EventEmitter();
  stepperStates: any = [];

  otpForm:FormGroup = new FormGroup({})
  resendOtpRequest: boolean = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.stepperStates = sessionStorage.getItem('stepperState');

    this.otpForm = this.formBuilder.group({
      otp: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]]
    });
  }

  changeActiveStepper(id: number, direction: boolean) {
    this.resendOtpRequest=false
    this.stepperStates = sessionStorage.getItem('stepperState');
    const stepperstate = JSON.parse(this.stepperStates);
    if (direction) {
      const selectedItem: any = stepperstate.find((e: { id: number; hasTraversed: boolean; }) => e.id === id);
      selectedItem.hasTraversed = true;
      sessionStorage.setItem('stepperState', JSON.stringify(stepperstate));
    }
    else {
      const selectedItem = stepperstate.find((e: { id: number }) => e.id === id);
      selectedItem.hasTraversed = false;
      sessionStorage.setItem('stepperState', JSON.stringify(stepperstate));
    }
    this.backToStepper.emit(1);
  }


   // Function to submit OTP
   submitOtp() {
    if (this.otpForm.valid) {
      // You can add your OTP validation logic here
      console.log('OTP is valid');
    } else {
      // If OTP form is invalid
      console.log('Invalid OTP');
    }
  }
  resendOTPline(){
    this.resendOtpRequest = true
  }
}


