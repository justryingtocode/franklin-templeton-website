import { Component } from '@angular/core';

@Component({
  selector: 'app-comapre-mutual-fund',
  templateUrl: './comapre-mutual-fund.component.html',
  styleUrls: ['./comapre-mutual-fund.component.scss']
})
export class ComapreMutualFundComponent {

  isFirstAccordionExpanded = false;
  isSecondAccordionExpanded = false;
  isThirdAccordionExpanded = false;
  isFourthAccordionExpanded = false;

  constructor() {}

  ngOnInit(): void { }

  toggleFirstAccodian()
  {
    this.isFirstAccordionExpanded = !this.isFirstAccordionExpanded;
  }

  toggleSecondAccodian()
  {
    this.isSecondAccordionExpanded = !this.isSecondAccordionExpanded;
  }

  toggleThirdAccodian()
  {
    this.isThirdAccordionExpanded = !this.isThirdAccordionExpanded;
  }

  toggleFourthAccodian()
  {
    this.isFourthAccordionExpanded = !this.isFourthAccordionExpanded;
  }

}
