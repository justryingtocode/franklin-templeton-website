import { Component, EventEmitter, OnInit, Output } from '@angular/core';
export interface stepper {
  id: number,
  hasTraversed: boolean
}

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss']
})
export class Step2Component implements OnInit{
  @Output() backToStepper: EventEmitter<any> = new EventEmitter();
  stepperStates: any = [];
  resendOtpRequest: boolean = false;

  ngOnInit(): void {
    this.stepperStates = sessionStorage.getItem('stepperState');
  }

  changeActiveStepper(id: number, direction: boolean) {
    this.resendOtpRequest = false
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
  resendOTPline(){
    this.resendOtpRequest = true
  }
}


