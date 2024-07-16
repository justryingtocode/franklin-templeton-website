import { Component } from '@angular/core';

export interface stepper {
  id: number,
  hasTraversed: boolean
}
@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})

export class RegisterFormComponent {
  stepperArray: Array<stepper> = [     // This is to check whether we have passed a particular stepper step.
    {
      "id": 1,
      "hasTraversed": false
    },
    {
      "id": 2,
      "hasTraversed": false
    },
    {
      "id": 3,
      "hasTraversed": false
    },
    {
      "id": 4,
      "hasTraversed": false
    }
  ];
  changeActiveStepper(id?: number, direction?: boolean) {
    // this.stepperStates = sessionStorage.getItem('stepperState');
    // const stepperstate = JSON.parse(this.stepperStates);
    if (direction) {
      console.log(direction)
      const selectedItem: any = this.stepperArray.find((e: { id: number; hasTraversed: boolean; }) => e.id == id);
      selectedItem.hasTraversed = true;
      console.log(this.stepperArray)
      // sessionStorage.setItem('stepperState', JSON.stringify(stepperstate));
    }
    else {
      const selectedItem: any = this.stepperArray.find((e: { id: number }) => e.id == id);
      selectedItem.hasTraversed = false;
      // sessionStorage.setItem('stepperState', JSON.stringify(stepperstate));
    }
  }
}
