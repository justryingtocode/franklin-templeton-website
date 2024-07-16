import { Component, HostListener } from '@angular/core';
import { FundService } from 'src/app/shared/services/fund.service';
import { KnowledgecenterService } from 'src/app/shared/services/knowledge-center/knowledgecenter.service';

@Component({
  selector: 'app-commentary-content',
  templateUrl: './commentary-content.component.html',
  styleUrls: ['./commentary-content.component.scss']
})
export class CommentaryContent2Component {

  isDropdownOpen = false;
  searchTerm: string = '';
  funds: any = []; // please maintain model don't use any 
  getMutualCard: any;
  selectedFund: any = null;
  fundsForSearch: any = [];
  fullFundsArray: any = [];
  showIconForWishlist: boolean[] = [];
  showIconForWatchlist: boolean[] = [];
  showTooltip: boolean = false;

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    const targetElement = event.target as HTMLElement;

    console.log(targetElement)

    // Check if the closest method is available
    if (targetElement.closest && !targetElement.closest('.category-dropdown')) {
      console.log('1')
      this.isDropdownOpen = false;
    }
  }

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

  getData:any;
  

  constructor(private _fundServices: FundService, private _knowledgeCenterData:KnowledgecenterService ) {}

  ngOnInit(): void {
    this.getBlog();
    this.getMockFunds();
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
      this.funds = [];
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
      this.funds = [selectedFund];
    }

    getBlog()
    {
      this._knowledgeCenterData.getBlogCardData().subscribe((res)=>{
        this.getData = res;
      })
    }
  
    toggleIconForWishlist(index: number) {
      this.showIconForWishlist[index] = !this.showIconForWishlist[index];
    }
  
    toggleIconForWatchlist(index: number) {
      this.showIconForWatchlist[index] = !this.showIconForWatchlist[index];
    }
  
    toggleTooltip()
    {
      this.showTooltip = false;
    }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

}
