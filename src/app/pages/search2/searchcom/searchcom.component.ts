import { Component } from '@angular/core';
import { FundService } from 'src/app/shared/services/fund.service';

@Component({
  selector: 'app-searchcom',
  templateUrl: './searchcom.component.html',
  styleUrls: ['./searchcom.component.scss']
})
export class SearchcomComponent {

  selectedCategory: string = 'All';
  categories: string[] = ['All', 'Fund', 'Forms & Documents', 'General', 'My Accounts'];
  visibleCategories: number = 3;


  // view all
  showAll: boolean = false;

  toggleView() {
    this.showAll = !this.showAll;
  }


  funds: any = [];

  constructor(private _fundServices: FundService){

  }

  ngOnInit()
  {
    this.getMockFunds();
  }

  getMockFunds = () => {
    this.funds = []
    this._fundServices.getMockFundsData().subscribe({
      next: (result) => {
        this.funds = result;
        console.log(this.funds)

      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  selectCategory(category: string): void {
    console.log(category);
    this.selectedCategory = category;
  }



  allCards: string[] = [''];
  formsAndDocuments:string[] = ['data 1'];
  general:string[] = ['data 1'];
  myAccount:string[] = ['data 1']
  fundCards: string[] = ['1', '2','3','4','5','6','7','8','9','10'];
  selectedButton: string = '';

  getCardCount(button: string): number {
    switch(button) {
      case 'all':
        return this.allCards.length + this.formsAndDocuments.length + this.general.length + this.myAccount.length; + this.fundCards.length;
      case 'forms':
        return this.formsAndDocuments.length;
      case 'general':
        return this.general.length;
      case 'account':
        return this.myAccount.length;
        case 'funds':
          return this.fundCards.length;
      default:
        return 0;
    }
  }

  toggleCards(button: string) {
    this.selectedButton = button;
  }

}
