import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-kyc-stepper',
  templateUrl: './kyc-stepper.component.html',
  styleUrls: ['./kyc-stepper.component.scss']
})
export class KycStepper2Component {

   // eye password
   password: string = '';
   showPassword: boolean = false;
 
   togglePasswordVisibility() {
     this.showPassword = !this.showPassword;
   }

   panForm: FormGroup = new FormGroup({})

   constructor(private fb: FormBuilder) {
     this.createPanForm();
   }

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
