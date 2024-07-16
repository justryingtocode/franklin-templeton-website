import { Component, HostListener } from '@angular/core';
import { FundService } from 'src/app/shared/services/fund.service';

@Component({
  selector: 'app-media-releases',
  templateUrl: './media-releases.component.html',
  styleUrls: ['./media-releases.component.scss']
})
export class MediaReleasesComponent {

  searchTerm: string = '';
  funds: any = []; // please maintain model don't use any 
  fundsForSearch: any = [];
  fullFundsArray: any = [];
  getMutualCard: any;
  selectedFund: any = null;
  selectedCategory: string = 'All';

  @HostListener('click', ['$event'])
  getTableDataPage(event: Event) {
 
   console.log((event.target as Element).className)
   if((event.target as Element).className === 'form-control search ng-untouched ng-pristine ng-valid' || (event.target as Element).className === 'form-control search ng-valid ng-dirty ng-touched' || (event.target as Element).className === 'form-control search ng-valid ng-touched ng-dirty' )
   {
     console.log('1')
     this.fundsForSearch = this.fullFundsArray
   }
   else{
     console.log('2')
     this.fundsForSearch = []
   }
   
  }

  constructor(private _fundServices: FundService) {}

  ngOnInit(): void {
    this.getMockFunds(); 
  }

  selectCategory(category: string): void {
    console.log(category)
    this.selectedCategory = category;
    // if(category !== 'All' )
    // {
    //   this.visibleCategories = this.categories.length;
    // }
    // else{
    //   this.visibleCategories = 3;
    // }
  }

  resetFundExplore()
{
  this.funds = this.fullFundsArray;
  this.searchTerm = '';
}

filterFunds(searchTerm: string) {
  if (searchTerm) {
    this.fundsForSearch = this.funds
    // console.log(this.fundsForSearch)
    this.fundsForSearch = this.fundsForSearch.filter((fund: any) =>
      fund.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  } else {
    this.fundsForSearch = this.fullFundsArray; // Clear the filtered results when input is empty
  }

}

getMockFunds = () => {
  this.funds = []
  this._fundServices.getMockFundsData().subscribe({
    next: (result) => {
      this.funds = result;
      this.fullFundsArray = result;
      console.log(this.funds);
      this.getMutualCard = this.funds.filter((item: any) => item).length;
    },
    error: (err) => {
      console.log(err);
    }
  })
}

getTableTitle(fund: any) {
  this.selectedFund = fund; // Update the selected fund variable
  this.searchTerm = this.selectedFund.title;
  const fundsArray = [...this.fullFundsArray]; 
  const selectedFund = fundsArray.find(fund => fund.id === this.selectedFund.id);
  this.funds = [selectedFund]
}


}
