import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
export interface stepper {
  id: number,
  hasTraversed: boolean
}

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.scss']
})
export class Step3Component implements OnInit{
  @Output() backToStepper: EventEmitter<any> = new EventEmitter();
  stepperStates: any = [];

  passwordForm: FormGroup = new FormGroup({})

  constructor(private formBuilder: FormBuilder) { }

     // eye password
     password: string = '';
     confirmPassword: string = '';
     showPassword: boolean = false;
   
     togglePasswordVisibility() {
       this.showPassword = !this.showPassword;
     }

  ngOnInit(): void {
    this.stepperStates = sessionStorage.getItem('stepperState');

    this.passwordForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(8)]],
     
    });
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

  
  onSubmit() {
    if (this.passwordForm.valid) {
      console.log('Form submitted successfully!');
    } else {
      console.error('Please fix the errors in the form.');
    }
  }
}

