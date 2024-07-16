import { Component } from '@angular/core';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss']
})
export class TermsConditionsComponent {
  openAccordionId: string | null = null;

  constructor() { }

  toggleAccordion(id: string) {
    this.openAccordionId = this.openAccordionId === id ? null : id;
  }

  isAccordionOpen(id: string): boolean {
    return this.openAccordionId === id;
  }

}
