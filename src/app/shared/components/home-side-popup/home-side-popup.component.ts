import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home-side-popup',
  templateUrl: './home-side-popup.component.html',
  styleUrls: ['./home-side-popup.component.scss']
})
export class HomeSidePopupComponent {
  
  @Input() isSmall = false
  @Output() backToInvest: EventEmitter<any> = new EventEmitter();
  otpRequired: boolean = false;
  otpSubmitted: boolean = false;
  otpNumber: Array<number> = [];
  remainingTime: number = 0;
  countdownTimeout: any
  filedDefaullt: boolean = false
  investNowForm: FormGroup = new FormGroup({})
  investNowForm1: FormGroup = new FormGroup({})
  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm()
  }

  initForm = () => {
    this.investNowForm = this._fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
      phone: ['', [Validators.required, Validators.maxLength(10)]],
      city: ['', Validators.required],
      // remarks: ['', [Validators.required]],
      // existingInvestorname: ['', Validators.required],
      // existingInvestorphone: ['', [Validators.required, Validators.maxLength(10)]]

    })

    this.investNowForm1 = this._fb.group({
      existingInvestorname: ['', Validators.required],
      existingInvestorphone: ['', [Validators.required, Validators.maxLength(10)]]
    })
  }



  back() {
    this.backToInvest.emit(false);
  }
  blockAlphabetsAndSpecialChars(event:any) {
    console.log(event.target.value)
    const char = event.key;
    // Check if the character is a numeric digit (0-9) or Backspace
    if (!/^[0-9]$/.test(char) && char !== 'Backspace') {
      event.preventDefault(); // Prevent the input of non-numeric characters
    }
  }
  clear() {
    this.otpRequired = false;
    this.otpSubmitted = false;
    this.backToInvest.emit(true);
    this.existingInvestor = false;
    this.newInvestor = true;

  }

  moveTo()
  {
    clearInterval(this.countdownTimeout); // Clear the previous interval
    this.remainingTime = 30; // Reset the countdown time
    this.otpRequired = !this.otpRequired;
    this.investNowForm.reset();
    this.startCountdown()
  }
  moveTo1() {
    clearInterval(this.countdownTimeout); // Clear the previous interval
    this.remainingTime = 30; // Reset the countdown time
    this.otpRequired = !this.otpRequired;
    this.investNowForm1.reset();
    this.startCountdown()
  }

  startCountdown() {
    clearTimeout(this.countdownTimeout); // Clear any existing timeout
    if (this.remainingTime > 0) {
      this.countdownTimeout = setTimeout(() => {
        this.remainingTime--;
        this.startCountdown(); // Recursively call startCountdown
      }, 1000); // Update every 1 second (1000 milliseconds)
    }
  }

  resetCountdown() {
    clearTimeout(this.countdownTimeout); // Clear the countdown timeout
    this.remainingTime = 30; // Reset the remaining time
    this.startCountdown()
  }

  checkboxCondition(event:any)
  {
     if(event.target.checked)
     {
       this.filedDefaullt = true;
     }
     else
     {
       this.filedDefaullt = false;
     }
  }


  // --------------------------------------


  isChecked: boolean = false;
  otpChecked: any = 0;


  newInvestor: boolean = true;
  existingInvestor: boolean = false;
  email: string = '';
  mobile: string = '';

  newInvestorInput() {
    this.newInvestor = true;
    this.existingInvestor = false;
    this.email = ''; // Clear mobile input if any
  }

  existingInvestorInput() {
    this.existingInvestor = true;
    this.newInvestor = false;
    this.mobile = ''; // Clear email input if any
  }
// ---------------------------
  otpPage:boolean = false;

  onSubmit() {
    this.newInvestor = false;
    this.otpPage = true;
  }

  toggleShowContactForm = () => {
    // this.showContactBoxInner = !this.showContactBoxInner;
    // this.showContactForm = !this.showContactForm;
    this.cardClose = false;
  };

  cardClose:boolean = true;

  onBack() {
    this.newInvestor = true;
    this.otpPage = false;
  }

}
