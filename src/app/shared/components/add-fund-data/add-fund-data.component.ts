import { Component, EventEmitter, HostListener, Input, Output, Renderer2 } from '@angular/core';
import { FundService } from '../../services/fund.service';
import { SolutionsService } from 'src/app/shared/services/solutions/solutions.service';
import { Router } from '@angular/router';
import { Options } from 'ngx-slider-v2';
declare var bootstrap: any;

@Component({
  selector: 'app-add-fund-data',
  templateUrl: './add-fund-data.component.html',
  styleUrls: ['./add-fund-data.component.scss']
})
export class AddFundDataComponent {
  @Input() isAddFund = false
  @Input() cardTypeData: string = "";
  @Input() hasComparCardButton: boolean = false;
  @Input() comaredFundInputFund: boolean = false;
  @Input() forNewSelectClick: boolean = false;
  @Input() makeCartToggle: boolean = true
  @Input() getAllowedFilter: boolean = true;
  @Input() searchOption: boolean = false;
  @Input() showfundperformance: boolean = false;
  @Output() fund: EventEmitter<any> = new EventEmitter<any>();
  @Output() dataForCompareCrad: EventEmitter<any> = new EventEmitter<any>();
  @Output() addOffCanvasOutput: EventEmitter<boolean> = new EventEmitter<boolean>();

  lastKnownScrollPosition: any;
  showFundSearchDropdown:boolean = true;
  showFundSearchDropdown1: boolean = true;
  showNewDialoge = false;
  showFilterBox = false;
  showMoreOptions = false;
  hideOptionSearch = true;
  showSelected = false;
  minReturn: number = 0;
  highReturn: number = 60;
  minRisk: number = 0;
  highRisk: number = 100;
  minSize: number = 0;
  highSize: number = 100;
  minAge: number = 0;
  highAge: number = 100;
  options: Options = {
    floor: 0,
    ceil: 100
  };
  getData:boolean | undefined;
  forCount: any
  fundsCard:any=[]
  selectedAnnualReturn: string | null = null;
  showAdvanceFilter = false;
  
  funds: any = [] // please maintain model don't use any
  fundsForSearch: any = []; 
  customValueToLegendMapping = [
    { value: 0, legend: 'Low' },
    { value: 25, legend: 'Low to Moderate' },
    { value: 50, legend: 'Moderate' },
    { value: 75, legend: 'Moderately High' },
    { value: 100, legend: 'High' }
  ];

  optionst: Options = {
    floor: 0,
    ceil: 100,
    step: 25, // Set the step value to match the custom values
    showTicks: true, // Show tick marks
    getLegend: (value: number): string => {
      const mapping = this.customValueToLegendMapping.find(item => item.value === value);
      return mapping ? mapping.legend : '';
    }
  };

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
  sidebarFilterList: Array<any> = []

  constructor(private _fundServices: FundService,
    private router: Router,
    private _solutionsService: SolutionsService,
    private renderer: Renderer2) {

  }

  ngOnInit(): void {
    this.getMockFunds();
    this.getMockFundsFilter();
    const data = sessionStorage.getItem('getToggle') as string;
    if(data !== null){
      this.getData = JSON.parse(data);
      console.log('11',this.getData) 
    }
    else{
      console.log('14')
    }
    

      // Initialize Offcanvas
      const offcanvas = new bootstrap.Offcanvas(document.getElementById('offcanvasBottom'), {
        backdrop: 'static', // Prevent clicking outside from closing
        keyboard: false // Prevent closing with the keyboard ESC key
      });

   
    

  }

  ngOnChanges()
  {
    console.log(this.forNewSelectClick)
    if(this.forNewSelectClick == false)
    {
      console.log('ab')
      const fundBlock = document.querySelector('.search-result');
      this.renderer.setStyle(fundBlock, 'visibility', 'hidden');
    }
  }

  @HostListener('click', ['$event'])
  getTableDataPage(event: Event) {
    

    console.log((event.target as Element).className)

    if((event.target as Element).className === 'form-control search ng-untouched ng-pristine ng-valid' || (event.target as Element).className === 'form-control search ng-valid ng-dirty ng-touched' || (event.target as Element).className === 'form-control search ng-pristine ng-valid ng-touched' )
    {
      // this.showFundSearchDropdown1 = true
      this.fundsForSearch = this.fullFundsArray
      console.log(this.fundsForSearch)
      console.log('1')
      const fundBlock = document.querySelector('.search-result');
      this.renderer.setStyle(fundBlock, 'visibility', 'visible');
      const fundBlock1 = document.querySelector('.search-result1');
      this.renderer.setStyle(fundBlock1, 'visibility', 'visible');
    }
    else{
      console.log('2')
      this.fundsForSearch = []
      const fundBlock = document.querySelector('.search-result');
      this.renderer.setStyle(fundBlock, 'visibility', 'hidden');
      const fundBlock1 = document.querySelector('.search-result1');
      console.log(fundBlock1)
      this.renderer.setStyle(fundBlock1, 'Display', 'visible!important');
      // this.showFundSearchDropdown1 = false
      this.fundsForSearch = []
    }
    

  }

  getMockFunds = () => {
    this.funds = []
    this.fundsCard = []
    this._fundServices.getMockFundsData().subscribe({
      next: (result) => {
        this.funds = result;
        this.fundsCard = result;
        this.fullFundsArray = result;
        console.log(this.funds);
        this.getMutualCard = this.funds.filter((item: any) => item).length;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  // getMockFunds = () => {
  //   debugger;
  //   this.fundsCard = []
  //   this._fundServices.getMockFundsData().subscribe({
  //     next: (result) => {
  //       this.fundsCard = result;
  //       this.fullFundsArray = result;
  //       console.log(this.fundsCard);
  //       this.getMutualCard = this.fundsCard.filter((item: any) => item).length;
  //     },
  //     error: (err) => {
  //       console.log(err);
  //     }
  //   })
  // }

  trackByFn(index: number, item: any) {
    return index; // or item.id
  }


  filterFunds(searchTerm: string) {
    if (searchTerm) {
      this.fundsForSearch = this.fundsCard
      console.log(this.fundsForSearch)
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
    this.fundsCard = [selectedFund]
  }

  resetFundExplore()
  {
    this.fundsCard = this.fullFundsArray;
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
 
  goToCart1(fund:any)
  {
    console.log('fund',fund)
    this.fund.emit(fund);
    this.showNewDialoge = !this.showNewDialoge;
    sessionStorage.removeItem('getAddDataCard')
    // document.getElementById('forRoute')?.click();
  
  }
  goToCart2(fund:any)
  {
    const getAddDataCard = fund
    console.log('fund',getAddDataCard)
    sessionStorage.setItem('getAddDataCard',JSON.stringify(getAddDataCard))
    this.showNewDialoge = !this.showNewDialoge;
    // document.getElementById('forRoute')?.click();
  
  }

  toggleShowSavDialoge1() {
    this.showNewDialoge = !this.showNewDialoge;
  }

  toggleShowFilterBox() {
    this.showFilterBox = !this.showFilterBox;
  }

  toggleMoreOptions() {
    this.showMoreOptions = !this.showMoreOptions;
    this.hideOptionSearch = !this.hideOptionSearch
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

    updateShowSelected() {
      // Update the showSelected variable based on whether there are selected options
      this.showSelected = this.selectedOptions.length > 0;
    }

    // getCheckboxValue(event: any, taregt:any ) {
    //   if (taregt === 'Annualised Returns') {
    //     const option = event.target.value;
    //     // If it's an "Annualised Returns" radio button
    //     if (event.target.checked) {
    //       // Check if a previous option was selected and remove it
    //       if (this.selectedAnnualReturn !== null) {
    //         const index = this.selectedOptions.indexOf(this.selectedAnnualReturn);
    //         if (index !== -1) {
    //           this.selectedOptions.splice(index, 1);
    //         }
    //       }
    //       this.selectedAnnualReturn = option; // Update the selected value
    //       this.selectedOptions.push(option);
    //       this.forCount = this.selectedOptions.length;
    //     }
    //   }
    //   else{
    //     const option = event.target.value;
    //     // Get the value attribute of the checkbox 
    //     if (event.target.checked) {
    //       this.selectedOptions.push(option);
    //       this.forCount = this.selectedOptions.length;
    //     }
    //     else {
    //       const index = this.selectedOptions.indexOf(option);
    //       if (index !== -1) {
    //         this.selectedOptions.splice(index, 1);
    //         this.forCount = this.selectedOptions.length;
    //       }
    //     }
    //   }
    //     this.updateShowSelected();
    // }

    getCheckboxValue(event: any)
    {

    }

    sliderEvent() {
      // console.log(this.highReturn)
    }

    getToggle()
    {
      this.showFilterBox = !this.showFilterBox
    }

    goToCart(data: any) {
      console.log(data)
      this.fund.emit(data);
      // this.showNewDialoge = !this.showNewDialoge;
      sessionStorage.removeItem('getAddDataCard')
      // this.funds.push(data);
      // console.log('Received data:', this.funds);
    }

    handleMakeOffCanvasOutput(value: boolean) {
      // Do something with the emitted value
      console.log('Received value from child:', value);
      this.addOffCanvasOutput.emit(value);
    }

    forDataCompareCard(data:any)
    {
      console.log(data); 
      this.dataForCompareCrad.emit(data);
    }

}
