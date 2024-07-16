import { Component, HostListener } from '@angular/core';
import { EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FundService } from '../../services/fund.service';

@Component({
  selector: 'app-search-data',
  templateUrl: './search-data.component.html',
  styleUrls: ['./search-data.component.scss']
})
export class SearchDataComponent implements OnInit {

  selecteReportTab: any = {}
  selectedCategory: string = '';
  categories: string[] = [];
  selectedCategoryData: any[] = [];

  selectedMenuName:string = "";

  //  search bar 
  fundsForSearch: any = [];
  fullFundsArray: any = [];
  searchTerm: string = '';
  funds: any = [];
  getMutualCard: any;
  selectedFund: any = null;
  showSuggestions: boolean = false;

  constructor(private router: Router, private _fundServices: FundService) {}


  ngOnInit() {

    this.getMockFunds();
  }

  // redirect function code
  @Output() close: EventEmitter<any> = new EventEmitter<any>();

  redirectToNextPage() {
    let ele = document.getElementById("modalClosebtn");
    if(ele){
      ele.click();
    }
    this.router.navigate(['/search2']);
    this.close.emit();
  }


    //  search bar
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
  
    filterFunds(searchTerm: string) {
      if (searchTerm) {
        this.showSuggestions = true;
        this.fundsForSearch = this.funds
        // console.log(this.fundsForSearch)
        this.fundsForSearch = this.fundsForSearch.filter((fund: any) =>
          fund.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
      } else {
        this.showSuggestions = false;
        this.fundsForSearch = this.fullFundsArray; // Clear the filtered results when input is empty
      }
    
    }
  
    getTableTitle(fund: any) {
      this.selectedFund = fund; // Update the selected fund variable
      this.searchTerm = this.selectedFund.title;
      const fundsArray = [...this.fullFundsArray]; 
      const selectedFund = fundsArray.find(fund => fund.id === this.selectedFund.id);
      this.funds = [selectedFund]
    }
  
    resetFundExplore()
    {
      this.funds = this.fullFundsArray;
      this.searchTerm = '';
    }

    @HostListener('click', ['$event'])
    getTableDataPage(event: Event) {
  
      console.log((event.target as Element).className)
      if ((event.target as Element).className === 'form-control search ng-untouched ng-pristine ng-valid' || (event.target as Element).className === 'form-control search ng-valid ng-dirty ng-touched' || (event.target as Element).className === 'form-control search ng-valid ng-touched ng-dirty') {
        console.log('1')
        this.fundsForSearch = this.fullFundsArray
      }
      else {
        console.log('2')
        this.fundsForSearch = []
      }
  
    }


}
