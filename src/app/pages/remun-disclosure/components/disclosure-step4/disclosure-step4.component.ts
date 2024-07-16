import { Component, ElementRef, EventEmitter, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

export interface stepper {
  id: number,
  hasTraversed: boolean
}

@Component({
  selector: 'app-disclosure-step4',
  templateUrl: './disclosure-step4.component.html',
  styleUrls: ['./disclosure-step4.component.scss']
})
export class DisclosureStep4Component implements OnInit {



  @Output() backToStepper: EventEmitter<any> = new EventEmitter();
  stepperStates: any = [];

  passwordForm: FormGroup = new FormGroup({})

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {

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
}
