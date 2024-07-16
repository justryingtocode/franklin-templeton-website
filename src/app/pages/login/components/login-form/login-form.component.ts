import { Component } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  distributorLogin: boolean = true;
  investorLogin: boolean = false;
  resendOtpRequest: boolean = false;


  // eye password
  password: string = '';
  showPassword: boolean = false;

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  otpScreen: boolean = false;
  bankAccDetails: boolean = false;
  toggleDistributorLogin(){
    this.distributorLogin = !this.distributorLogin;
    this.investorLogin = !this.investorLogin
    this.resendOtpRequest = false
    this.resetStages()

    if(this.distributorLogin){
      this.usePan = 0;
      this.resetStages();
    }
  }
  isChecked: boolean = false;
  usePan: any = 0;
  constructor(private route:ActivatedRoute, private formBuilder: FormBuilder) {
    this.route.queryParams.subscribe(params =>{
      if(params['type'] && params['type'] == "distributor"){
        this.distributorLogin = false;
        this.investorLogin  = true;
      }
    });

  }

  ngOnInit(): void {



    this.bankAccountForm = this.formBuilder.group({
      accountNumber: ['', [Validators.required, Validators.pattern('[0-9]{9}')]]
    });
  }

  // ------------------
  bankAccountForm: FormGroup = new FormGroup({})
  
  get formControls() {
    return this.bankAccountForm.controls;
  }

  
  onSubmit() {
    if (this.bankAccountForm.invalid) {
      return;
    }
    // Here you can proceed with your validation logic
    console.log('Form submitted!');
  }


  handleFormSubmit(){
    this.otpScreen = true;
    if(this.usePan){
      // this.bankAccDetails = true;
    }
  }
  backFromOtp(){
    this.otpScreen = false;
    this.resendOtpRequest = false
  }

  goToBankAccNo(data: any){
    this.bankAccDetails = data;
  }

  handleTypeChange(d: any){
    this.resetStages();
    if(this.usePan){
    }
    this.resendOtpRequest = false
  }
  
  resetStages(){
    this.otpScreen = false;
    this.bankAccDetails = false;
  }
  resendOTPline(){
    this.resendOtpRequest = true
  }
}
