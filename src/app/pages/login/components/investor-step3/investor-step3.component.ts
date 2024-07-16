import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
export interface stepper {
  id: number,
  hasTraversed: boolean
  
}
@Component({
  selector: 'app-investor-step3',
  templateUrl: './investor-step3.component.html',
  styleUrls: ['./investor-step3.component.scss']
})
export class InvestorStep3Component implements OnInit{
  @Output() backToStepper: EventEmitter<any> = new EventEmitter();
  stepperStates: any = [];

  bankAccountForm: FormGroup = new FormGroup({})

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.stepperStates = sessionStorage.getItem('stepperState');


    this.bankAccountForm = this.formBuilder.group({
      accountNumber: ['', [Validators.required, Validators.pattern('[0-9]{9}')]]
    });
  }

  password: string = '';
  showPassword: boolean = false;

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  changeActiveStepper(id: number, direction: boolean) {
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


}


