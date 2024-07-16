import { Component, ElementRef, EventEmitter, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

export interface stepper {
  id: number,
  hasTraversed: boolean
}
@Component({
  selector: 'app-investor-step4',
  templateUrl: './investor-step4.component.html',
  styleUrls: ['./investor-step4.component.scss']
})
export class InvestorStep4Component implements OnInit{

  // @ViewChild('registerProcess') registerProcess?: ElementRef;
  
  @Output() backToStepper: EventEmitter<any> = new EventEmitter();
  stepperStates: any = [];

  passwordForm: FormGroup = new FormGroup({})

  constructor(private formBuilder: FormBuilder, private router: Router) { }

   // eye password
   password: string = '';
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



onSubmitModal(){
     setTimeout(() => {
     document.getElementById('registered')?.click();
        this.router.navigate(['/login']);
    }, 3000);

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


