import { Component, EventEmitter, HostListener, Input, Output, SimpleChanges } from '@angular/core';
import { FundService } from '../../../../shared/services/fund.service';
import { SolutionsService } from 'src/app/shared/services/solutions/solutions.service';
import { DatasharingService } from 'src/app/shared/services/datasharing.service';
declare var bootstrap: any;

@Component({
  selector: 'app-watchlist-content',
  templateUrl: './watchlist-content.component.html',
  styleUrls: ['./watchlist-content.component.scss']
})
export class WatchlistContentComponent {
  @Input() isAddFund = false
  @Input() showWatchlist: boolean | undefined;
  @Input() fund: any;
  @Output() toggleDataCard: EventEmitter<boolean> = new EventEmitter<boolean>();
 datacard:any;
  Data:any = []
  lastKnownScrollPosition: any;
  compareToggleChangedDataValueCard:any
  dataCardToggle: boolean = true

  
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
  mobileFilterChips: string[] = ["All", "ELSS", "FOF Domestic", "Fixed Income", "International", "Hybrid", "Equity", "Liquid"];
  preData: string[] = ['All'];
  fundsCard:any = []
  activeTab = 0;



  constructor(private _fundServices: FundService,private _solutionsService: SolutionsService,
    private dataSharingService:DatasharingService ) {
      this.datacard = this.dataSharingService.getSharedData();
      // console.log('1a',this.dataSharingService.getSharedData())
      if(this.dataSharingService.getSharedData() != undefined)
      {
        setTimeout(() => {
          this.funds.push(this.datacard)
          // console.log(this.funds)
        }, 1000);
      }
    
  }
  ngOnInit(): void {
    this.getMockFunds();
    this.getMockFundsFilter();

    setTimeout(() => {
      // console.log('1')
      const data = sessionStorage.getItem('getAddDataCard') as string;
      if(data !== null){
        const data2 = JSON.parse(data);
        this.funds.push(data2)
        // console.log('11',this.funds) 
      }
      else{
        console.log('14')
      }
    }, 500);

  

      // Initialize Offcanvas
      const offcanvas = new bootstrap.Offcanvas(document.getElementById('offcanvasBottom'), {
        backdrop: 'static', // Prevent clicking outside from closing
        keyboard: false // Prevent closing with the keyboard ESC key
      });
  
  }
 
  getMockFunds = () => {
    this.fundsCard = []
    this._fundServices.getMockFundsData().subscribe({
      next: (result) => {
        this.fundsCard = result;
        this.fullFundsArray = result;
        // console.log(this.fundsCard);
        this.getMutualCard = this.fundsCard.filter((item: any) => item).length;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  trackByFn(index: number, item: any) {
    return index; // or item.id
  }


  filterFunds(searchTerm: string) {
    // console.log(searchTerm);
    // console.log(this.funds)
    if (searchTerm) {
      this.funds = this.funds.filter((fund:any) =>
        fund.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else {
      this.funds = this.fullFundsArray; // Clear the filtered results when input is empty
    }
  }

  showContentOnHover(event: any) {
    document.getElementById(event.target.id)?.click();
  }

  getTableTitle(fund: any) {
    alert('1')
    this.selectedFund = fund; // Update the selected fund variable
    // console.log(this.selectedFund)
  }

  getMockFundsFilter = () => {
    this._solutionsService.getMockSolutionsFilterOptions().subscribe({
      next: (result) => {
        this.sideFilterOptions = result
        // console.log(this.sideFilterOptions);
    // console.log('2')
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  // ngOncganes()
  // {
  //   setTimeout(() => {
  //     const data = sessionStorage.getItem('fund');
  //     if (data !== null) {
  //       this.fund = JSON.parse(data);
  //       console.log('1', data);
  //     }
  //   }, 1000);
  // }
  // ngOnChanges() {
  //  console.log(this.showWatchlist)
  //  this.funds.push(this.fund);
  // //  this.funds = ({...this.fund})
  //  console.log(this.fund)
  //  console.log(this.fund != undefined)
  // }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['fund']) {
      if (this.fund !== undefined) {
        this.funds.push(this.fund);
        // console.log(this.funds);
      } else {
        console.log('this.fund is undefined');
      }
    }
  }

  onCompareToggleChangedDataValueCard(compareToggleData:any)
  {
    this.funds.push(compareToggleData);
    // console.log(this.funds)
  }

  goToCart(data: any) {
    this.funds.push(data);
    // console.log(data)
    // console.log('Received data:', this.funds);
  }

  makeCartToggle()
  {
    this.dataCardToggle = false
    this.toggleDataCard.emit(this.dataCardToggle);
    const getToggle : boolean = true
    sessionStorage.setItem('getToggle',JSON.stringify(getToggle))
  }
  makeCartToggle2(){
    const getToggle : boolean = false
    sessionStorage.setItem('getToggle',JSON.stringify(getToggle))
  }
  
  isOptionSelected(option: string): boolean {
    return this.preData.includes(option);
  }

  toggleOptionSelection(option: string) {
    if (option === 'All') {
      this.preData = ['All']; 
    } else {
      if (this.preData.includes('All')) {
        this.preData = this.preData.filter(item => item !== 'All');
      }
      if (this.preData.includes(option)) {
        this.preData = this.preData.filter(item => item !== option);
      } else {
        this.preData.push(option);
      }
    }
  }

  // Active functionality
  changeActiveTab(index: number) {
    this.activeTab = index;
  }
  
  resetActiveTab() {
    this.activeTab = -1;
  }
  

}
