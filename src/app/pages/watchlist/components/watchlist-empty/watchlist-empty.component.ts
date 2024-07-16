import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { FundService } from '../../../../shared/services/fund.service';
import { SolutionsService } from 'src/app/shared/services/solutions/solutions.service';
import { Router } from '@angular/router';
declare var bootstrap: any;

@Component({
  selector: 'app-watchlist-empty',
  templateUrl: './watchlist-empty.component.html',
  styleUrls: ['./watchlist-empty.component.scss']
})
export class WatchlistEmptyComponent {
  @Input() isAddFund = false
  @Output() fund: EventEmitter<any> = new EventEmitter<any>();
  lastKnownScrollPosition: any;
  
  funds: any = [] // please maintain model don't use any 
  

  sideFilterOptions: any;
  getMutualCard: any;
  getCheckboxData: any;
  selectedOptions: string[] = [];
  searchTerm: string = '';
  fullFundsArray: any = [];
  selectedFund: any = null;
  filteredFunds: any = [];
  makeModalData = false;
  deltaYr:number = 0;
  deltaYt: number = 0;
  activeTab = 0;

 fundCardRounterLink: object = {routerLink:'/watchlist', showWatchlist: true};

  constructor(private _fundServices: FundService,
    private router: Router,
    private _solutionsService: SolutionsService) {
  }
  ngOnInit(): void {
    this.getMockFunds();
    this.getMockFundsFilter();

      // Initialize Offcanvas
      const offcanvas = new bootstrap.Offcanvas(document.getElementById('offcanvasBottom'), {
        backdrop: 'static', // Prevent clicking outside from closing
        keyboard: false // Prevent closing with the keyboard ESC key
      });

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
    console.log(searchTerm);
    console.log(this.funds)
    if (searchTerm) {
      this.funds = this.funds.filter((fund:any) =>
        fund.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else {
      this.funds = this.fullFundsArray; // Clear the filtered results when input is empty
    }
  }

  getTableTitle(fund: any) {
    alert('1')
    this.selectedFund = fund; // Update the selected fund variable
    console.log(this.selectedFund)
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
    this.activeTab = -1;
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
  

}
