import { Component,HostListener,OnInit } from '@angular/core';
import { FundService } from 'src/app/shared/services/fund.service';
import { KnowledgecenterService } from 'src/app/shared/services/knowledge-center/knowledgecenter.service';

@Component({
  selector: 'app-category-content',
  templateUrl: './category-content.component.html',
  styleUrls: ['./category-content.component.scss']
})
export class CategoryContentComponent implements OnInit {
  toggleFilter=false;

  selectedCategory: string = 'All';
  categories: string[] = ['All', 'term_Busters', 'Videos', 'Articles'];

  isDropdownOpen = false;
  showTooltip: boolean = false;
  searchTerm: string = '';
  funds: any = []; // please maintain model don't use any 
  getMutualCard: any;
  selectedFund: any = null;
  fundsForSearch: any = [];
  fullFundsArray: any = [];

  showIconForWishlist: boolean[] = [];
  showIconForWatchlist: boolean[] = [];

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

  getData:any;

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

  constructor( private _knowledgeCenterData :KnowledgecenterService,private _fundServices: FundService) { }

  ngOnInit(): void {
    this.getCategory()
    this.getMockFunds();
  }
  toggleFilterBox(){
    this.toggleFilter = !this.toggleFilter
  }

  selectCategory(category: string): void {
    console.log(category)
    this.selectedCategory = category;
    this.getCategory(category);
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  getCategory(type = "All")
  {
    this._knowledgeCenterData.getCategoryCardData().subscribe((res)=>{
      this.getData = res;
      if(type != "All"){
        this.getData = this.getData.filter((res:any)=>
        res.category == type
      ); 
      }
      console.log(res);
      this.getData.forEach(() => {
        this.showIconForWishlist.push(true);
        this.showIconForWatchlist.push(true);
      });
    })
  }

  toggleIconForWishlist(index: number) {
    this.showIconForWishlist[index] = !this.showIconForWishlist[index];
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
  
  toggleIconForWatchlist(index: number) {
    this.showIconForWatchlist[index] = !this.showIconForWatchlist[index];
  }

  toggleTooltip()
  {
    this.showTooltip = false;
  }

}
