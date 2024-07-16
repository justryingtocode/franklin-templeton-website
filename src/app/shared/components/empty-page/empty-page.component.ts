import { Component, EventEmitter, HostListener, Input, Output, Renderer2 } from '@angular/core';
import { FundService } from '../../services/fund.service';
import { SolutionsService } from 'src/app/shared/services/solutions/solutions.service';
import { Router } from '@angular/router';
declare var bootstrap: any;

@Component({
  selector: 'app-empty-page',
  templateUrl: './empty-page.component.html',
  styleUrls: ['./empty-page.component.scss']
})
export class EmptyPageComponent {
  @Input() isAddFund = false
  @Input() CartSectionImg:boolean = false
  @Input() hasComparCardButton: boolean = false
  @Input() makeCartToggle:boolean = true
  @Input() comaredCardImg:boolean = false
  @Input() pageSubHeading:string = ""
  @Input() cardTypeData: string = "";
  @Output() fund: EventEmitter<any> = new EventEmitter<any>();
  @Output() addToCartOutputInEmptyPage: EventEmitter<any> = new EventEmitter();
  @Output() emitComparedDataToggle: EventEmitter<boolean> = new EventEmitter<boolean>();
  lastKnownScrollPosition: any;
  
  funds: any = [] // please maintain model don't use any 
  fundsForSearch: any = []
  

  sideFilterOptions: any;
  getMutualCard: any;
  getCheckboxData: any;
  selectedOptions: string[] = [];
  searchTerm: string = '';
  fullFundsArray: any = [];
  selectedFund: any = null;
  showFundSearchDropdown:boolean = true
  filteredFunds: any = [];
  makeModalData = false;
  deltaYr:number = 0;
  deltaYt: number = 0;
  activeTab = 0;

 fundCardRounterLink: object = {routerLink:'/watchlist', showWatchlist: true};

 constructor(private _fundServices: FundService,
  private router: Router,
  private _solutionsService: SolutionsService,
  private renderer: Renderer2) {}

  ngOnInit(): void {
    this.getMockFunds();
    this.getMockFundsFilter();

      // Initialize Offcanvas
      const offcanvas = new bootstrap.Offcanvas(document.getElementById('offcanvasBottom'), {
        backdrop: 'static', // Prevent clicking outside from closing
        keyboard: false // Prevent closing with the keyboard ESC key
      });
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
      this.fundsForSearch = this.funds
      // console.log(this.fundsForSearch)
      this.fundsForSearch = this.fundsForSearch.filter((fund: any) =>
        fund.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else {
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

  getMockFundsFilter = () => {
    this._solutionsService.getMockSolutionsFilterOptions().subscribe({
      next: (result) => {
        this.sideFilterOptions = result
        console.log(this.sideFilterOptions);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  changeActiveTab(index: number) {
    this.activeTab = index;
  }
  
  resetActiveTab() {
    this.activeTab = 0;
  }
  
  showContentOnHover(event: any) {
    document.getElementById(event.target.id)?.click();
  }
 
  goToCart(fund:any)
  {
    console.log('fund',fund)
    this.fund.emit(fund);
    // document.getElementById('forRoute')?.click();
  
  }

  handleAddToCart(param: any) {
    // Do something with the emitted value (param)
    console.log('Received from child component:', param);
     // Emit the addToCartOutputInEmptyPage event
     this.addToCartOutputInEmptyPage.emit(param);
  }

  forGoComparedCard(data:any)
  {
    console.log(data)
    this.emitComparedDataToggle.emit(data);
  }

}
