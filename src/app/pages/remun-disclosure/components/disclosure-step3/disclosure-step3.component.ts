import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
export interface stepper {
  id: number,
  hasTraversed: boolean
}

@Component({
  selector: 'app-disclosure-step3',
  templateUrl: './disclosure-step3.component.html',
  styleUrls: ['./disclosure-step3.component.scss']
})
export class DisclosureStep3Component implements OnInit{

  @Output() backToStepper: EventEmitter<any> = new EventEmitter();
  stepperStates: any = [];

  bankAccountForm: FormGroup = new FormGroup({})

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.stepperStates = sessionStorage.getItem('stepperState');
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


}
