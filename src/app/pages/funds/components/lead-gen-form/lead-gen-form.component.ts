import { Component, ElementRef, EventEmitter, Output } from '@angular/core';

export interface stepper {
  id: number,
  hasTraversed: boolean
}


@Component({
  selector: 'app-lead-gen-form',
  templateUrl: './lead-gen-form.component.html',
  styleUrls: ['./lead-gen-form.component.scss']
})
export class LeadGenFormComponent {

  accountform : boolean = true;
  collapseTwo: boolean = false;
  Dialoge: boolean = false;
  constructor(private elementRef: ElementRef) {}

  getcallDataForm()
  {
    this.accountform = false;
    this.collapseTwo = true;
  }

  getforDataForm()
  {
    this.Dialoge= true;
  }

  getDataToForm() {
    console.log('Getting data');
    this.Dialoge= false;
    this.accountform = true;
    this.collapseTwo = false;
  }
  

}
