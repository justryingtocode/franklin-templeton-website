import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss']
})
export class GoalsComponent implements OnInit {

  formValue: any
  isSIP = true
  isTargeted = false
  constructor() {  }

  ngOnInit(): void {
  }
  toggleIsSIP = (value: boolean) => { 
    this.isSIP = value
    // console.log("Total form values => ",this.formValue);
  }

  toggleIsisTargeted = (value: boolean, data: string) => {
    if (data === 'Investment amount') {
        this.isTargeted = false;
    }
    if (data === 'Target amount') {
        this.isTargeted = true;
    }
}


  getTotalInvestment = (amount: number) => {
    let result = 0
    
    switch (this.formValue?.time) {
      case 'DAILY':
        result = 365 * this.formValue?.earn / this.formValue?.period * amount
        break;
      case 'WEEKLY':
        result = 52.1429 * this.formValue?.earn / this.formValue?.period * amount
        break;
      case 'MONTHLY':
        result = 12 * this.formValue?.earn / this.formValue?.period * amount
        break;
      case 'QUARTERLY':
        result = 4 * this.formValue?.earn / this.formValue?.period * amount
        break;
      default:
        result = 0
        break;
    }
    return result
  }

  getPotentialGains = () => {
    return (this.formValue?.expectedReturn/100) * this.getTotalInvestment(this.formValue?.amount)
  }

  getHaveToInvestAmount = () => {
    let result = 0
    
    switch (this.formValue?.time) {
      case 'DAILY':
        result = this.formValue?.earn / this.formValue?.period / 365
        break;
      case 'WEEKLY':
        result = this.formValue?.earn / this.formValue?.period / 52.1429
        break;
      case 'MONTHLY':
        result = this.formValue?.earn / this.formValue?.period / 12
        break;
      case 'QUARTERLY':
        result = this.formValue?.earn / this.formValue?.period / 4
        break;
      default:
        result = 0
        break;
    }
    return result - (this.formValue?.expectedReturn/100) * result
  }

  getDisplayCurrency = (n: any) => {
    if(!n || n >= 0){
      return;
    }
    let number = new Intl.NumberFormat('en-IN',{style: 'currency', minimumFractionDigits: 0}).format(n)
    return number;//`₹${number}`;
  }

}
