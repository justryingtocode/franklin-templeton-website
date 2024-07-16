import { Component, EventEmitter, OnInit, Output } from '@angular/core';
export interface stepper {
  id: number,
  hasTraversed: boolean
}
@Component({
  selector: 'app-step6',
  templateUrl: './step6.component.html',
  styleUrls: ['./step6.component.scss']
})
export class Step6Component implements OnInit{
  @Output() backToStepper: EventEmitter<any> = new EventEmitter();
  stepperStates: any = [];


    // eye password
    password: string = '';
    showPassword: boolean = false;
  
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    }

  ngOnInit(): void {
    this.stepperStates = sessionStorage.getItem('stepperState');
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
    this.backToStepper.emit([]);
  }
}