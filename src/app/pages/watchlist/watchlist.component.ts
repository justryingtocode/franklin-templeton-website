
import { Component, HostListener, Input } from '@angular/core';
import { FundService } from '../../shared/services/fund.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { DatasharingService } from 'src/app/shared/services/datasharing.service';
import { Options } from 'ngx-slider-v2';
declare var bootstrap: any;
@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.scss']
})

export class  WatchlistComponent  {
  @Input() isAddFund = false
  // datacard:any;
  lastKnownScrollPosition: any;
  dataCardToggle: boolean = true
  // addCardToggle: boolean = false
  // dataCardToggle: boolean;
  
  funds: any = [] // please maintain model don't use any 
  fund: any;
  


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
  showWatchlist : boolean=false;


  constructor(private _fundServices: FundService, private location: Location,
    private route: ActivatedRoute,private dataSharingService: DatasharingService ) {
      this.route.params.subscribe(params => {
        this.showWatchlist = params['showWatchlist'] === 'true';
      });
  }
  ngOnInit(): void {
    this.getMockFunds();

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

toggleWatchlist(){
  this.showWatchlist = !this.showWatchlist
}

onFundAdded(fund: any) {
  this.fund = fund; // Capture the emitted fund value
  console.log(this.fund)
}

makeToggle()
{
  this.dataCardToggle = !this.dataCardToggle;
  // this.addCardToggle = !this.addCardToggle;
}

onToggleDataCard(value: boolean) {
  this.dataCardToggle = value
}

}
