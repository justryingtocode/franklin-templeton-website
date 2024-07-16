import { Component, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2 } from '@angular/core';
import { FundService } from '../../services/fund.service';
import { Options } from 'ngx-slider-v2';
declare var bootstrap: any;
 
@Component({
  selector: 'app-all-funds',
  templateUrl: './all-funds.component.html',
  styleUrls: ['./all-funds.component.scss']
})
export class AllFundsComponent {
  @Input() isAddFund = false
  @Input() isAddFund2 = false;
  @Input() changeName = false;
  @Input() toggletitile = false;
  @Input() comaprecard = false;
  @Output() compareToggleChangedDataValueCard = new EventEmitter<any>();

  sideFilterOptions: any;

  compareToggleData:any
  showFundSearchDropdown:boolean = true
  lastKnownScrollPosition: any;
  forCountShowComapredCard: any[] = []
  fundCat = ["Aggressive Hybrid Fund",
    "Banking & PSU Fund",
    "Close-Ended Debt Fund",
    "Conservative Hybrid Fund",
    "Corporate Bond Fund",
    "Dividend Yield Fund",
    "Dynamic Bond",
    "ELSS",
    "Equity Saving Fund",
    "Flexi Cap Fund",
    "Floater Fund",
    "Focused Fund",
    "FoF - Domestic",
    "Gilt Fund",
    "Index Fund",
    "Large & Mid Cap Fund",
    "Large Cap Fund",
    "Liquid Fund",
    "Low Duration Fund",
    "Medium Duration Fund",
    "Mid Cap Fund",
    "Money Market Fund",
    "Open-Ended Hybrid",
    "Retirement Fund",
    "Short Duration Fund"]
  funds: any = [] // please maintain model don't use any 
  fundsForSearch:any = [];
  forCount: any
  showAdvanceFilter = false;
  showMoreOptions = false;
  hideOptionSearch = true;
  showFilterBox = false;
  showSortBy = false;
  showSelected = false;
  minReturn: number = 0;
  highReturn: number = 60;
  minRisk: number = 0;
  highRisk: number = 100;
  minSize: number = 0;
  highSize: number = 20000;
  minSize2: number = 0;
  highSize2: number = 20000;
  minSizeData: number = 0;
  highSizeData: number = 20000;
  minAge: number = 0;
  highAge: number = 100;
  minAge2: number = 0;
  highAge2: number = 100;
  minAgeData: number = 0;
  highAgeData: number = 100;
  options: Options = {
    floor: 0,
    ceil: 20000,
    step: 100
  };
  optionsData: Options = {
    floor: 0,
    ceil: 20000,
    step: 100
  };
  options1: Options = {
    floor: 0,
    ceil: 100,
  };
  optionsData1: Options = {
    floor: 0,
    ceil: 100,
  };
  sidebarFilterList: Array<any> = []
  selectedAnnualReturn: string | null = null;
  // Define the custom value-to-legend mapping
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

  getMutualCard: any;
  getCheckboxData: any;
  selectedOptions: string[] = [];
  mobileFilterChips: string[] = ["All", "International", "FOF Domestic", "Fixed Income", "ELSS", "Hybrid", "Equity", "Liquid"];
  // preData: string = 'All';
  preData: string[] = ['All'];
  mselectedOption: string = 'All';
  searchTerm: string = '';
  fullFundsArray: any = [];
  selectedFund: any = null;
  filteredFunds: any = [];
  makeModalData = false;
  deltaYr: number = 0;
  deltaYt: number = 0;
  isMobileView: boolean = false;

  searchPlaceholderText: string = "Ask us any question, we have a fund for you";

  constructor(private _fundServices: FundService,private renderer: Renderer2, private el: ElementRef) {
  }
  ngOnInit(): void {
    this.getMockFunds();
    this.getSidebarFilters()
    this.onWindowResize();

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

  @HostListener('click', ['$event'])
  getTableDataPage(event: Event) {

    console.log((event.target as Element).className);


    // remove dark background layer
    let canvasElemnt = $(".offcanvas-backdrop");
    if(canvasElemnt && canvasElemnt.length >= 2){
      $(".offcanvas-backdrop")[0].remove();
    }


    if((event.target as Element).className === 'form-control search ng-untouched ng-pristine ng-valid' || (event.target as Element).className === 'form-control search ng-valid ng-dirty ng-touched' )
    {
      console.log('1')
      this.fundsForSearch = this.fullFundsArray 
    }
    else{
      console.log('2')
      this.fundsForSearch = []
    }   
  }


  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event: any) {
    const deltaY = window.scrollY - this.lastKnownScrollPosition;
    this.deltaYr = window.scrollY - this.lastKnownScrollPosition;
    this.lastKnownScrollPosition = window.scrollY;
    // let menu: any = document.querySelector(".header");
    let menu: any = document.getElementById("header-top")
    // let menu2: any = document.getElementById("header-top2")
    let menu3: any = document.getElementById("header-top3")
    let accordionHeight: any = document.getElementById('filterAccordion');
    let sidebarsticky = document.getElementById("innerfilter");
    let mutualfundsticker = document.getElementById('mutualfundsheader');
    let filterHead = document.getElementById('filterHead');
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    this.deltaYt = (winScroll / height) * 100;
    if (window.innerWidth < 768) {
      this.isMobileView = true;
    }
    else {
      this.isMobileView = false;
    }
    if (deltaY > 0 && scrolled > 1.5) {
      if (window.innerWidth > 768) {
        // sidebarsticky?.classList.remove('h-400')
        // setTimeout(() => {
        mutualfundsticker?.classList.add('sidebar-position-stiky');
        mutualfundsticker?.classList.remove('d-none');
        // filterHead?.classList.add('mt-80');
        accordionHeight?.classList.add('h-400');
      }
      else {
        // menu.classList.remove("position-stiky");
        menu?.classList.remove("position-stiky");
        menu?.classList.add("top-1");
        // menu2.classList.remove("position-stiky");
        menu3.classList.remove("checkTop");
        // }, 100);
      }

    } else if (deltaY < 0 && scrolled < 1.5) {
      // margin-top: 89px;
      if (window.innerWidth > 768) {

        // sidebarsticky?.classList.add('h-400');
        mutualfundsticker?.classList.remove('sidebar-position-stiky')
        accordionHeight?.classList.remove('h-400');
        // filterHead?.classList.remove('mt-80');
      }
      else {
        if (scrolled < 0.5) {
          menu?.classList.remove("position-stiky");
        }
        // setTimeout(() => {
        menu3.classList.remove("checkTop");
        // }, 100);
      }
    }
    else {
      if (window.innerWidth > 768) {
        mutualfundsticker?.classList.remove('sidebar-position-stiky');
        // filterHead?.classList.add('h-400');
      }
      else {
        setTimeout(() => {
          if (scrolled > 7) {
            menu?.classList.remove("top-1");
            menu.classList.add("position-stiky");
          }
          // menu2.classList.add("position-stiky");
          // menu3.classList.add("checkTop");
        }, 100);
      }

    }
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize($event: any={}){

    // based on width changed search placeholder
    const element: any = $(document).width();
    if(element < 500){
      this.searchPlaceholderText = "Search";
    }else{
      this.searchPlaceholderText = "Ask us any question, we have a fund for you";
    }
  }



  toggleAdvanceFilter() {
    this.showAdvanceFilter = !this.showAdvanceFilter;
  }
  toggleMoreOptions() {
    this.showMoreOptions = !this.showMoreOptions;
    this.hideOptionSearch = !this.hideOptionSearch
  }
  toggleShowFilterBox() {
    this.showFilterBox = !this.showFilterBox;
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
  sliderEvent() {
  }
  getSidebarFilters = () => {
    this.funds = []
    this._fundServices.getSidebarFilterContent().subscribe({
      next: (result: any) => {
        this.sidebarFilterList = result;
      },
      error: (err) => {
        console.log(err);
      }
    })
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

  updateShowSelected() {
    // Update the showSelected variable based on whether there are selected options
    this.showSelected = this.selectedOptions.length > 0;
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

  filterFunds(searchTerm: string) {
    if (searchTerm) {
      this.fundsForSearch = this.funds
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

  addData() {
    this.showSortBy = !this.showSortBy
  }

  callModal() {
    const offcanvas = new bootstrap.Offcanvas(document.getElementById('offcanvasBottom'));
    offcanvas.show();
  }

  closeModal() {
    const offcanvas = new bootstrap.Offcanvas(document.getElementById('offcanvasBottom'));
    offcanvas.hide();
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

  isOptionSelected(option: string): boolean {
    return this.preData.includes(option);
  }

  onCompareToggleChanged(compareToggleData: any) {
    // Handle the received data here.
    this.compareToggleData = compareToggleData;
    this.compareToggleChangedDataValueCard.emit(this.compareToggleData);
  }
// asset tab web view
  showContentOnHover(event: any) {
    document.getElementById(event.target.id)?.click();
  }


  // handle accordion auto close
  onOccordionClick(e: any){
    $('.accordion-collapse').removeClass('show')
    $('.accordion-button').addClass('collapsed')
  }
}
