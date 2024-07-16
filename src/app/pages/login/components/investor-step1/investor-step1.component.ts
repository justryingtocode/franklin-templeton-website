import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
export interface stepper {
  id: number,
  hasTraversed: boolean
}
@Component({
  selector: 'app-investor-step1',
  templateUrl: './investor-step1.component.html',
  styleUrls: ['./investor-step1.component.scss']
})
export class InvestorStep1Component implements OnInit{
  @Output() backToStepper: EventEmitter<any> = new EventEmitter();
  stepperStates: any = [];

  // investorRegistorForm: FormGroup = new FormGroup({});

  // constructor(private _fb: FormBuilder) { }
  
  panForm: FormGroup = new FormGroup({})

  constructor(private fb: FormBuilder) {
    this.createPanForm();
  }

  ngOnInit(): void {
    this.stepperStates = sessionStorage.getItem('stepperState');
    // this.initForm();
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



  // initForm = () => {
  //   this.investorRegistorForm = this._fb.group({
  //     name: ['', Validators.required],

  //   })

   
  // }

// pan validation
  createPanForm() {
    this.panForm = this.fb.group({
      panNumber: ['', [Validators.required, this.panValidator]]
    });
  }

  panValidator(control:any) {
    const panNumberPattern = /^[A-Za-z]{5}\d{4}[A-Za-z]$/;
    if (control.value && !panNumberPattern.test(control.value)) {
      return { invalidPan: true };
    }
    return null;
  }

  onSubmit() {
    if (this.panForm.valid) {
      console.log('Valid PAN number: ', this.panForm.value.panNumber);
    } else {
      console.log('Invalid PAN number');
    }
  }



}


