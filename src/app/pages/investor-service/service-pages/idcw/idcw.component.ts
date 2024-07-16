import { Component, HostListener, Input } from '@angular/core';
import { event } from 'jquery';
import { FundService } from 'src/app/shared/services/fund.service';
declare var bootstrap: any;

@Component({
  selector: 'app-idcw',
  templateUrl: './idcw.component.html',
  styleUrls: ['./idcw.component.scss']
})
export class IdcwComponent {

  @Input() isAddFund = false

  getData:boolean= false;
  
  funds: any = [];
  fullFundsArray: any = [];
  getMutualCard: any;
  showAdvanceFilter = false;
  showFilterBox = false;

  showSelected = false;
  selectedOptions: string[] = [];
  forCount: any;
  sidebarFilterList: Array<any> = []

  selectedAnnualReturn: string | null = null;

  minReturn: number = 0;
  highReturn: number = 60;
  minRisk: number = 0;
  highRisk: number = 100;
  minSize: number = 0;
  highSize: number = 20000;
  minSizeData: number = 0;
  highSizeData: number = 20000;
  minAge: number = 0;
  highAge: number = 100;
  minAgeData: number = 0;
  highAgeData: number = 100;

  fundsForSearch: any = [];
  searchTerm: string = '';
  selectedFund: any = null;

  preData: string[] = ['All'];
  mobileFilterChips: string[] = ["All", "International", "FOF Domestic", "Fixed Income", "ELSS", "Hybrid", "Equity", "Liquid"];
  forCountShowComapredCard: any[] = [];
  showNav:boolean = true;
  getTitle: any = 'NAV';

  // Fund Category 
  maxHeight:number = 460;

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


  constructor(private _fundServices: FundService) {

  }

  ngOnInit()
  {
    this.getMockFunds();
    this.getSidebarFilters();

    const data = localStorage.getItem('comparedCard');

    if (data !== null) {
      this.forCountShowComapredCard = JSON.parse(data);
    } else {
      // Handle the case when the item is not found in localStorage
      console.error('No data found in localStorage for comparedCard');
    }


    // Initialize Offcanvas
    const offcanvas = new bootstrap.Offcanvas(document.getElementById('offcanvasBottom'), {
      backdrop: 'static', // Prevent clicking outside from closing
      keyboard: false // Prevent closing with the keyboard ESC key
    });
    
  }

  toggleAdvanceFilter() {
    this.showAdvanceFilter = !this.showAdvanceFilter;
  }

  toggleShowFilterBox() {
    this.showFilterBox = !this.showFilterBox;
  }

  updateShowSelected() {
    // Update the showSelected variable based on whether there are selected options
    this.showSelected = this.selectedOptions.length > 0;
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

  resetFundExplore()
  {
    this.funds = this.fullFundsArray;
    this.searchTerm = '';
  }

  getTableTitle(fund: any) {
    this.selectedFund = fund; // Update the selected fund variable
    this.searchTerm = this.selectedFund.title;
    const fundsArray = [...this.fullFundsArray]; 
    const selectedFund = fundsArray.find(fund => fund.id === this.selectedFund.id);
    this.funds = [selectedFund]
  }

  hideClear(selectedOptions: string[]) {
    for (const option of selectedOptions) {
      const checkboxId = option.toString();
      const checkbox = document.getElementById(checkboxId) as HTMLInputElement;
      if (checkbox) {
        checkbox.checked = false;
      }
    }

    // Clear all selected options and update showSelected
    this.selectedOptions = [];
    this.forCount = this.selectedOptions.length;
    this.updateShowSelected();
  }

  removeOption(option: string) {
    const index = this.selectedOptions.indexOf(option);
    if (index !== -1) {
      this.selectedOptions.splice(index, 1);
    }
    this.forCount = this.selectedOptions.length;
    // Uncheck the corresponding checkbox by ID
    const checkboxId = option.toString(); // Use the common ID for your checkboxes
    const checkbox = document.getElementById(checkboxId) as HTMLInputElement;
    if (checkbox) {
      checkbox.checked = false;
      if(checkboxId == 'Since Inception' || checkboxId == '1 Year' || checkboxId == '3 Year' || checkboxId == '5 Year' || checkboxId == '10 Year') {
        const filteredList: any = this.sidebarFilterList.filter((e) => e.headerText == 'Annualised Returns');
        filteredList[0].showCustomReturn = false;
      }
    }
    this.updateShowSelected();
  }

  getCheckboxValue(event: any, taregt:any ) {
    if (taregt === 'Annualised Returns') {
      const option = event.target.value;
      // If it's an "Annualised Returns" radio button
      if (event.target.checked) {
        // Check if a previous option was selected and remove it
        if (this.selectedAnnualReturn !== null) {
          const index = this.selectedOptions.indexOf(this.selectedAnnualReturn);
          if (index !== -1) {
            this.selectedOptions.splice(index, 1);
          }
        }
        this.selectedAnnualReturn = option; // Update the selected value
        this.selectedOptions.push(option);
        this.forCount = this.selectedOptions.length;
      }
    }
    else{
      const option = event.target.value;
      // Get the value attribute of the checkbox 
      if (event.target.checked) {
        this.selectedOptions.push(option);
        this.forCount = this.selectedOptions.length;
      }
      else {
        const index = this.selectedOptions.indexOf(option);
        if (index !== -1) {
          this.selectedOptions.splice(index, 1);
          this.forCount = this.selectedOptions.length;
        }
      }
    }
      this.updateShowSelected();
  }

  getSidebarFilters = () => {
    this.funds = []
    this._fundServices.getSidebarFilter2Content().subscribe({
      next: (result: any) => {
        this.sidebarFilterList = result;
      },
      error: (err) => {
        console.log(err);
      }
    })
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

  callModal() {
    const offcanvas = new bootstrap.Offcanvas(document.getElementById('offcanvasBottom'));
    offcanvas.show();
  }

  closeModal() {
    const offcanvas = new bootstrap.Offcanvas(document.getElementById('offcanvasBottom'));
    offcanvas.hide();
  }

  getMockFunds = () => {
    this.funds = []
    this._fundServices.getMockFundsData().subscribe({
      next: (result) => {
        this.funds = result;
        this.fullFundsArray = result;
        this.getMutualCard = this.funds.filter((item: any) => item).length;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  isOptionSelected(option: string): boolean {
    return this.preData.includes(option);
  }

  toggleForTabNav()
  {
     this.showNav = true;
     this.getTitle = 'NAV';
    this.getData=false;

  }

  toggleForTabIdcw()
  {
    this.showNav = false;
    this.getTitle = 'IDCW';
    this.getData=true;

  }

  // getDataDrop(event:boolean){
  //   this.getData=event
  // }

}
