import { Component, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { data } from 'jquery';
import { FundService } from 'src/app/shared/services/fund.service';
import { SolutionsService } from 'src/app/shared/services/solutions/solutions.service';

@Component({
  selector: 'app-nav-alerts',
  templateUrl: './nav-alerts.component.html',
  styleUrls: ['./nav-alerts.component.scss']
})
export class NAVAlertsComponent {

  @Output() fund: EventEmitter<any> = new EventEmitter<any>();
  @Output() emitComparedDataToggle: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() hasComparCardButton: boolean = false
  @Input() cardTypeData: string = "";
  @Input() makeCartToggle:boolean = true
  @Output() addToCartOutputInEmptyPage: EventEmitter<any> = new EventEmitter();

  @Output() toggleSelect:EventEmitter<any> = new EventEmitter()
  
  mobile:boolean = true;
  email: boolean = false;
  solutionsCardContent: any = [];
  fundsForSearch: any = [];
  fullFundsArray: any = [];
  searchTerm: string = '';
  funds: any []= [];
  selectedFund: any = null;
  sideFilterOptions: any;
  activeTab = 0;
  getMutualCard: any;
  forDataPartBefore: boolean = false;
  addAlert: boolean = false;

  dialOtp: FormGroup = new FormGroup({});
  

  navInputEmailScreenBox: boolean = true;
  forGo: boolean = false;

  getMobile:boolean = false;
  getEmail:boolean = false;

  forToggle:any = 'mobile'
  forNavsDataFlow: boolean = true;
  forNavsCheckFlow: boolean = false;
  maximumLimit: boolean = false;

  fundsLimit: number = 3;
  






  showFundSearchDropdown:boolean = true

  navTitle:any = [];

  @HostListener('click', ['$event'])
  getTableDataPage(event: Event) {
    if ((event.target as Element).className === 'form-control search ng-untouched ng-pristine ng-valid' ||
        (event.target as Element).className === 'form-control search ng-valid ng-dirty ng-touched' ||
        (event.target as Element).className === 'form-control search ng-valid ng-touched ng-dirty') {
      this.fundsForSearch = this.fullFundsArray;
    } else if ((event.target as Element).className == "checkall") {
      const checkbox = event.target as HTMLInputElement;
      if (checkbox.checked) {
        console.log('Select all');
        // Select all cards
        this.funds.forEach(element => {
          element.selected = true; 
          this.getNavSelectAll(element);
        });
      } else {
        console.log('Deselect all');
        // Deselect all cards
        this.funds.forEach(element => {
          element.selected = false; 
          this.removeNavSelectAll(element);
        });
      }
    } else {
      console.log('2');
      this.fundsForSearch = [];
    }
  }
  // getTableDataPage(event: Event) {
  //   // debugger;
  //  console.log((event.target as Element).className)
  //  if((event.target as Element).className === 'form-control search ng-untouched ng-pristine ng-valid' || (event.target as Element).className === 'form-control search ng-valid ng-dirty ng-touched' || (event.target as Element).className === 'form-control search ng-valid ng-touched ng-dirty' )
  //  {
  //    console.log('1')
  //    this.fundsForSearch = this.fullFundsArray
  //  }
  //  if((event.target as Element).className == "checkall"){
  //   console.log(this.funds.length);
    
  //   this.funds.forEach(element => {
  //     this.getNav(element)
  //   });
  //  }
  //  else{
  //    console.log('2')
  //    this.fundsForSearch = []
  //  }
   
  // }


  

  constructor( private _solutionsService: SolutionsService,private _fundServices: FundService,private _fb: FormBuilder, private elementRef: ElementRef) {}

  ngOnInit()
  {
     this.getCardData()
     this.getMockFunds()
     this.getMockFundsFilter()
     this.initForm()
  }

  // onChange($event:any){
  //     const id = $event.target.value
  //     const isCheacked = $event.target.checked;

  //     this.funds.map ((d)) => {
  //       if (d.id === id){
  //        d.isTrusted ==
  //       }
  //     }
  // }

  initForm = () => {
    this.dialOtp = this._fb.group({
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]]
    })
  }

  forMobile(data:any)
  {
    this.forToggle = data;
    this.mobile = true;
    this.email = false;
  }

  forEmail(data:any)
  {
    this.forToggle = data;
    this.mobile = false;
    this.email = true;

  }
 
  onBack() {
    this.getEmail =false;
    this.navInputEmailScreenBox = true;
    this.mobile = false;
  }

  backMob() {
    this.getMobile =false;
    this.navInputEmailScreenBox = true;
    this.mobile = true;
  }

  goToVerificationsFlowPage()
  {
    this.navInputEmailScreenBox = false;    
    this.forGo = true;
    if(this.forToggle == 'mobile')
    {
      this.getMobile = true;
      this.getEmail = false; 
      this.nvmEmail= false;
      this.periodFrequncy= false;
      this.fundsLimit = 3;
    }
    else if(this.forToggle == 'email')
    {
      this.getEmail = true;
      this.getMobile = false;
      this.nvmEmail= false;
      this.periodFrequncy= false;
      this.fundsLimit = this.fullFundsArray.length
    }

    this.forGo = true;

    console.log(this.dialOtp.value);
  }

  filterFunds(searchTerm: string) {
    if (searchTerm) {
      this.fundsForSearch = this.funds;
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
    this.funds = [selectedFund];
  }

  selectedAll(){
   console.log (this.navTitle)
    console.log("this.funds");
    console.log(this.funds);
  }

  resetFundExplore()
  {
    this.funds = this.fullFundsArray;
    this.searchTerm = '';
  }

  changeActiveTab(index: number) {
    this.activeTab = index;
  }

  handleAddToCart(param: any) {
    // Do something with the emitted value (param)
    console.log('Received from child component:', param);
     // Emit the addToCartOutputInEmptyPage event
     this.addToCartOutputInEmptyPage.emit(param);
  }

  blockAlphabetsAndSpecialChars(event:any) {
    console.log(event.target.value)
    const char = event.key;
    // Check if the character is a numeric digit (0-9) or Backspace
    if (!/^[0-9]$/.test(char) && char !== 'Backspace') {
      event.preventDefault(); // Prevent the input of non-numeric characters
    }
  }

  oncheckBox(event:any){
    if(event.target.check){

    }
  }

  getMockFunds = () => {
    this.funds = []
    this._fundServices.getMockFundsData().subscribe({
      next: (result) => {
        // this.funds = result;
          // Convert the object into an array
        const fundsArray = Object.values(result);

        // Add the 'isAdded' property to each fund object
        this.funds = fundsArray.map((fund: any) => ({ ...fund, isAdded: false }));
        this.fullFundsArray = result;
        console.log(this.funds);       
        this.getMutualCard = this.funds.filter((item: any) => item).length;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  getMockFundsFilter = () => {
    this._solutionsService.getMockSolutionsFilterOptions().subscribe({
      next: (result) => {
        this.sideFilterOptions = result;
        console.log(this.sideFilterOptions);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  resetActiveTab() {
    this.activeTab = 0;
  }

  goToCart(fund:any)
  {
    console.log('fund',fund)
    this.fund.emit(fund);
    // document.getElementById('forRoute')?.click();
  
  }

  toggleCard()
  {
    this.addAlert = !this.addAlert;
  }

  toggleDialog()
  {
    this.addAlert = true;
  }

  
  forGoComparedCard(data:any)
  {
    console.log(data)
    this.emitComparedDataToggle.emit(data);
  }

  getCardData = () => {
    this._solutionsService.getgoalPlannerCardData().subscribe({
      next: (result) => {
        this.solutionsCardContent = result;
        this.solutionsCardContent.forEach((element: any) => {
          element.isAdded = false;
        });
        // console.log(this.solutionsCardContent);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  forGoSelectFundFlow() {
    this.forNavsDataFlow = false;
    this.forNavsCheckFlow = true;
    this.forDataPartBefore = !this.forDataPartBefore;
    
    if (this.forToggle == 'email') {
      this.getEmail = false;
      this.getMobile = false;
      this.nvmEmail = true;
      this.periodFrequncy = true;
      this.forNavsCheckFlow = false;
      this.forDataPartBefore = false;
    }
  }

  removeNav(data:any)
  {
    console.log(data)
     // Assuming you want to remove the object with a matching 'title'
    this.navTitle = this.navTitle.filter((item: any) => item.id !== data.id);
    if(this.navTitle.length<= this.fundsLimit)
    {
      this.maximumLimit = false
    }

    
  }

  getNav(data:any)
  {
    console.log(data)
    // if(this.navTitle.length<=2)
    // {
    //   this.navTitle.push(data);
    //   console.log(this.navTitle);
    // }
    // else{
    //   console.log('maximum limit for fund select is 3')
    // }
    // this.navTitle.length <=2 ? (this.navTitle.push(data), console.log(this.navTitle)):this.maximumLimit = true;
    this.navTitle.length <= this.fundsLimit ? (this.navTitle.push(data), console.log(this.navTitle), this.maximumLimit = false) : this.maximumLimit = true;

   
  }
  

  getNavSelectAll(data:any)
  {
    console.log(data)
    // if(this.navTitle.length<=2)
    // {
    //   this.navTitle.push(data);
    //   console.log(this.navTitle);
    // }
    // else{
    //   console.log('maximum limit for fund select is 3')
    // }
    // this.navTitle.length <=2 ? (this.navTitle.push(data), console.log(this.navTitle)):this.maximumLimit = true;
    this.navTitle.length <= 30 ? (this.navTitle.push(data), console.log(this.navTitle), this.maximumLimit = false) : this.maximumLimit = true;

   
  }
  // mobileFundLimitExceeded:boolean = false;

  // getNav(data:any) {
  //   console.log(data);
  //   if (this.forToggle === 'mobile') {
  //     // Only allow adding a maximum of 3 funds for mobile
  //     if (this.navTitle.length < 3) {
  //       this.navTitle.push(data);
  //       console.log(this.navTitle);
  //       // Reset the limit exceeded flag
  //       this.mobileFundLimitExceeded = false;
  //     } else {
  //       // Set the limit exceeded flag to true
  //       this.mobileFundLimitExceeded = true;
  //       console.log('Maximum limit for fund select is 3 for mobile');
  //     }
  //   } else if (this.forToggle === 'email') {
  //     // Allow adding unlimited funds for email
  //     this.navTitle.push(data);
  //     console.log(this.navTitle);
  //   }
  // }

  // getNavSelectAll(data:any) {
  //   console.log(data);
  //   if (this.forToggle === 'email') {
  //     // Only allow adding a maximum of 3 funds for mobile
  //     if (this.navTitle.length < 30) {
  //       this.navTitle.push(data);
  //       console.log(this.navTitle);
  //       // Reset the limit exceeded flag
  //       this.mobileFundLimitExceeded = false;
  //     } else {
  //       // Set the limit exceeded flag to true
  //       this.mobileFundLimitExceeded = true;
  //       console.log('Maximum limit for fund select is 3 for mobile');
  //     }
  //   } else if (this.forToggle === 'mobile') {
  //     // Allow adding unlimited funds for email
  //     this.navTitle.push(data);
  //     console.log(this.navTitle);
  //   }
  // }
  

  removeNavSelectAll(data:any)
  {
    console.log(data)
     // Assuming you want to remove the object with a matching 'title'
    this.navTitle = this.navTitle.filter((item: any) => item.id !== data.id);
    if(this.navTitle.length<=30)
    {
      this.maximumLimit = false
    }
  }

  removeFunds(itemDetail: any) {
 
  }

  nvmEmail:boolean = false;
  periodFrequncy:boolean = false;
  periodFormate:boolean = false;

  navDate:boolean = false;

  getButton:boolean = true;
  frequencyMob:boolean = true;


  onOneTime() {
    this.periodFormate = true;
    this.forNavsCheckFlow = true;
    this.forDataPartBefore = true;
    this.getButton = false;
    this.frequencyMob = false;
    this.isEmailSelectAll = true;
  }

  onDaily(){
    this.periodFormate = false;
    this.forNavsCheckFlow = false;
    this.forDataPartBefore = false;
    this.getButton = true;
    this.frequencyMob = true;
    this.isEmailSelectAll = false;
  }

  onReset() {
    this.periodFormate = false;
    this.forNavsCheckFlow = false;
    this.forDataPartBefore = false;
  }

  showCustomDate() {
    this.navDate = true;
  }
  hideCustomDate() {
    this.navDate = false;
  }



  // // Method to add all funds when the "Add All Funds" button is clicked
  // addAllFundsButtonClicked() {
  //   // Add all funds to the right side
  //   this.navTitle = [...this.funds];
  //   // Reset maximum limit flag
  //   this.maximumLimit = false;
  // }


  onCheckboxChange(fund: any) {
    // Toggle the 'checked' property of the fund object
    fund.checked = !fund.checked;
  }

  onFundReset(){

  }

  isChecked: boolean = false;
  otpChecked: any = 0;

  isMonthChecked: boolean = false;
  monthChecked:any = 0

  isEmailSelectAll:boolean = false;



  

}
