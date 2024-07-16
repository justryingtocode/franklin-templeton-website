import { DOCUMENT, } from '@angular/common';
import { Input,ChangeDetectorRef, Component, ElementRef, HostListener, Inject, OnInit, Renderer2, SimpleChanges, ViewChild, Output, EventEmitter } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../../services/common.service';
import { ComparefundService } from '../../services/compare-fund/comparefund.service';
import { FundService } from '../../services/fund.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() backToInvest: EventEmitter<any> = new EventEmitter();
  @ViewChild('calculatorbutton') calculatorbutton!: ElementRef;
  @ViewChild('otherbutton') otherbutton!: ElementRef;
  @ViewChild('FtAcademybtn') FtAcademybtn!: ElementRef;
  @ViewChild('marketinsightbtn') marketinsightbtn!: ElementRef;
  @ViewChild('personalDetailbtn') personalDetailbtn!: ElementRef;
  @ViewChild('formDownloadbtn') formDownloadbtn!: ElementRef;
  @ViewChild('connectUsbtn') connectUsbtn!: ElementRef;
  @ViewChild('NAVbtn') NAVbtn!: ElementRef;
  // @ViewChild('perspectiveUs') perspectiveUs!: ElementRef;

  
  activeMobileHeaderId: any = '';
  isDropdownVisible: boolean = false;
  isDarkMode: boolean = false;
  showCardfooter: boolean = true;
  noticeBannerIsOpened: boolean = true;
  optionalsBannerClose: boolean = true;
  activeTab: any;
  activeTab2: string | null = null;
  activesubTab: any = '';
  footerLabel: any;
  footerLabel1: any;
  cartItemCount: number = 0;
  itemData:any;
  btnLoginText:string = "Login /Invest"; //"Login /Register";

  getAlert: boolean = false;

  // search model popup

  showModal = true;
  callNewServiceLayout : boolean = true;


  activeFontSize: any = localStorage.getItem("activeFontSize") || 2;
  activeDarkMode: any = localStorage.getItem("activeDarkMode") || false;

  config = {
    color: {
      checked: '#3366FF',
      unchecked: '#8189a270',
    },
  }
  
  @Input() isSmall = false
  isMobileView: boolean = false;
  otpNumber: Array<number> = [];
  otpRequired: boolean = false;
  otpSubmitted: boolean = false;
  showTextArea: boolean = false;
  remainingTime: number = 0;
  countdownTimeout: any;
  filedDefaullt: boolean = false
  mediaSrc: string = '';
  mediaType: string = '';
  isMediaTypeVideo: boolean = true;
  investNowForm: FormGroup = new FormGroup({})
  investNowForm1: FormGroup = new FormGroup({})
  resendOtpRequest: Boolean = false;
  isNewUiChecked:boolean=false;
  currentRatting: any;
  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    let topSpacElement: any = document.getElementById('handle-top-spacing');
    if (!this.noticeBannerIsOpened) {
      if (window.innerWidth < 768) {
        topSpacElement?.classList.add('FT-default-top-mob');
        topSpacElement?.classList.remove('FT-default-top-web');
      }
      else {
        topSpacElement?.classList.remove('FT-default-top-mob');
        topSpacElement?.classList.add('FT-default-top-web');
      }
    }
  }
  
  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event: any) {
    const deltaY = window.scrollY - this.lastKnownScrollPosition;
    this.lastKnownScrollPosition = window.scrollY;
    let menu: any = document.querySelector(".header");
    let topSpacElement: any = document.getElementById('handle-top-spacing');
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let header: any = document.getElementById('mainHeader');
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;

    let headerHeight = (header.offsetHeight - 20);

    let progressBar: any = document.getElementById("myBar")
    progressBar.style.width = scrolled + "%";
    const browserZoomLevel = Math.round(window.devicePixelRatio * 100);
    if (deltaY > 0 && winScroll > headerHeight) {
      menu?.classList.add("scroll-down");
      if (window.innerWidth < 767) {
        if (this.noticeBannerIsOpened) {
          document.documentElement.style.setProperty('--mainContentMobileMargin', '300px');
          menu?.classList.add("mobile-fix-top");
          topSpacElement?.classList.add('fix-mobile-margin');
        }
        // this.noticeBannerIsOpened ? : '';
      }
      else if (window.innerWidth >= 768 && window.innerWidth < 830) {
        // menu?.classList.add('fix-tablet-top-margin');\
        if (this.noticeBannerIsOpened) {
          document.documentElement.style.setProperty('--mainContentMargin', '287px');
          menu?.classList.add('fix-tablet-top-margin')
        } else {
          menu?.classList.add('fix-tablet-top-margin2');
        }
      }
      else {
        browserZoomLevel > 100 ? header?.classList.add('fix-zoom-header-styling') : header?.classList.remove('fix-zoom-header-styling');
        if (this.noticeBannerIsOpened) {
          document.documentElement.style.setProperty('--mainContentMargin', '287px');
          // topSpacElement?.classList.add('fix-margin');
          menu?.classList.add("web-fix-top");
        }
      }
    } else {
      menu.classList.remove("scroll-down");
      if (window.innerWidth < 767) {
        if (this.noticeBannerIsOpened) {
          document.documentElement.style.setProperty('--mainContentMobileMargin', '97px;');
          menu?.classList.remove("mobile-fix-top");
          topSpacElement?.classList.remove('fix-mobile-margin');
        }
      }
      else if (window.innerWidth >= 768 && window.innerWidth < 830) {
        this.noticeBannerIsOpened ? menu?.classList.remove('fix-tablet-top-margin')
          : menu?.classList.remove('fix-tablet-top-margin2');
      }
      else {
        browserZoomLevel > 100 ? header?.classList.remove('fix-zoom-header-styling') : '';
        if (this.noticeBannerIsOpened) {
          document.documentElement.style.setProperty('--mainContentMargin', '126px;');
          // topSpacElement?.classList.remove('fix-margin');
          menu?.classList.remove("web-fix-top");
        }
      }

    }
    const scrollTopBtn = this.document.getElementById('scrollTopBtn')
    if (winScroll > 550) {
      scrollTopBtn?.classList.remove('d-none')
    } else {
      scrollTopBtn?.classList.add('d-none')
    }
  }
  @HostListener('click', ['$event'])
  onClickDateRangePicker(event: Event) {
    if (this.ShowSideMenu) {
      if ((event.target as Element).className == 'page-overlay') this.ShowSideMenu = false;
    }
  }
  ngOnInit(): void {
    this.cardData()
    this.checkCartValue();
    this.findIfcartEmpty();
    this.fixNotificationHeader();

    this.handlesCloseButton();
    this.initForm();    
    this.getMockFunds();
  }

  lastKnownScrollPosition!: number;

  ShowSideMenu = false;
  ShowSearch = false;
  ShowSuggest = false;
  ShowRecent = true;

  constructor(@Inject(DOCUMENT) private document: Document, private router: Router, private renderer: Renderer2, private el: ElementRef, private changeRef: ChangeDetectorRef, private commonService: CommonService, private card_Data: ComparefundService,private _fb: FormBuilder, private _fundServices: FundService) {
    sessionStorage.setItem('noticeBannerIsOpen', JSON.stringify(this.noticeBannerIsOpened));
    this.commonService.getCartChange().subscribe((data: any) => {
      this.findIfcartEmpty();
     
    });
  }
  handleThemeModeClick = (e: any) => {
    this.isDarkMode = e?.target.checked;
    if (e?.target?.checked) this.document.body.classList.add('page-dark-mode');
    else this.document.body.classList.remove('page-dark-mode');
  }

  handleThemeModeClick1 = (mode: boolean) => {
    // if(mode == 'dark') this.document.body.classList.add('page-dark-mode');
    // else this.document.body.classList.remove('page-dark-mode');
    this.commonService.setDarkmode(mode);
    this.activeDarkMode = mode;
  }

  handlesCloseButton()
  {
    this.optionalsBannerClose = true
  }

  toggleShowSideMenu() {
    this.ShowSideMenu = !this.ShowSideMenu;
  }
 toggleShowSearch()  {
    this.ShowSearch = !this.ShowSearch;
  }
  toggleShowSuggest() {
    this.ShowSuggest = !this.ShowSuggest;
    this.ShowRecent = !this.ShowRecent;
  }
  showContentOnHover(event: any) {
    if (event.target.id) {
      if (event.target.id == 'v-pills-Others-tab') {
        this.showCardfooter = false;
      }
      else if (event.target.id == 'v-pills-Calculators-tab') {
        this.footerLabel = 'Calculators';
      }
      else if (event.target.id == 'v-pills-Solutions-tab') {
        this.footerLabel = 'Solutions';
      }
      else {
        this.showCardfooter = true;
      }
      this.activeTab = event.target.id;
      if(event.target.id != "headerOtherlink"){
        // console.log("event.target.id => ",event.target.id);
        document.getElementById(event.target.id)?.click();
      }
    }
  }

  showSideContentOnHover(event: any) {
    if (event.target.id) {
      // document.getElementById(event.target.id)?.click(); 
      if (event.target.id == 'explore-funds-button') {
        const isOtherBtnActive = this.otherbutton.nativeElement.classList.contains('active');
        if (isOtherBtnActive) {
          this.activeTab = 'v-pills-Others-tab';
          this.showCardfooter = false;
        }
        else {
          this.activeTab = event.target.id;
          this.showCardfooter = true;
        }
        return;
      }
      else if (event.target.id == 'plan-your-investment-button') {
        const isCalcBtnActive = this.calculatorbutton.nativeElement.classList.contains('active');
        if (isCalcBtnActive) {
          this.activeTab = 'v-pills-Calculators-tab';
          this.footerLabel = 'Calculators';
        }
        else {
          this.footerLabel = 'Solutions';
          this.activeTab = event.target.id;
        }
        return;
      }
      else if (event.target.id == 'knowledge-center-button') {
        this.FtAcademybtn.nativeElement.classList.contains('active') ? this.activeTab = 'v-pills-Insights-tab'
          : this.marketinsightbtn.nativeElement.classList.contains('active') ? this.activeTab = 'v-pills-market-insights-tab'
            : this.activeTab = event.target.id;
        return;
      }
      else if (event.target.id = 'investor-service-button') {
        this.personalDetailbtn.nativeElement.classList.contains('active') ? this.activeTab = 'v-pills-Account-tab'
          : this.formDownloadbtn.nativeElement.classList.contains('active') ? this.activeTab = 'v-pills-Product-tab'
            : this.connectUsbtn.nativeElement.classList.contains('active') ? this.activeTab = 'v-pills-Other-tab'
              : this.NAVbtn.nativeElement.classList.contains('active') ? this.activeTab = 'v-pills-Subscription-tab'
              // : this.perspectiveUs.nativeElement.classList.contains('active') ? this.activeTab = 'v-pills-Perspective-tab'
                : this.activeTab = event.target.id;
        return;
      }
      // this.activeTab = event.target.id;

    }
  }
  contentOnHoverCLose(param: any) {
    // console.log(param)
    document.getElementById(param)?.click();
  }

  setActiveTabToNull(param: any) {
    document.getElementById(param)?.click();
    // this.router.navigate([/funds])
  }
  toggleDropdown(): void {
    this.isDropdownVisible = !this.isDropdownVisible;
  }
  toggleMobileHeader(param: any) {
    this.activeMobileHeaderId = param;
    // console.log(this.activeMobileHeaderId)
  }

  noticeBannerToggle() {
    let topSpacElement: any = document.getElementById('handle-top-spacing');
    this.noticeBannerIsOpened = !this.noticeBannerIsOpened;
    if (!this.noticeBannerIsOpened) {
      if (window.innerWidth < 768) {
        topSpacElement?.classList.add('FT-default-top-mob');
      }
      else {
        topSpacElement?.classList.add('FT-default-top-web');
      }
    }
  }



  showCart = false;
  toggleCart() {
    this.showCart = !this.showCart
  }
  checkCartValue() {
    const cartCount: number = Number(sessionStorage?.getItem('cartItemCount'));
    if (cartCount && cartCount > 0) {
      this.cartItemCount = cartCount;
    }
  }
  findIfcartEmpty() {
    const cartDetails: any = sessionStorage.getItem('cart');
    const cartArr = JSON.parse(cartDetails);
    if (cartArr && cartArr?.length > 0) {
      this.cartItemCount = cartArr.length;
    }
  }

  showContentOnHover2(tabId: string) {
    this.activeTab2 = tabId;
  }

  contentOnHoverClose2(tabId: string) {
    if (this.activeTab2 === tabId) {
      this.activeTab2 = null;
    }
  }

  cardData = () => {
    this.card_Data.getHedaerCard().subscribe(
      {
        next: (result) => {
          this.itemData = result;
          let url = window.location.href;
          if(url.indexOf('distributor') > -1){
            this.btnLoginText = "Login /Register";
            this.itemData.userTypes.forEach((element:any) => {
              if(element.label == "Distributor"){
                element.isActive = true;
              }else{
                element.isActive = false;
              }
            });
          }else{
            this.btnLoginText = "Login /Invest";
          }
          // console.log(this.itemData)
        },
        error: (err) => {
          console.log(err)
        }
      }
    )
  }

  changeLink =(label:string) =>{
    console.log(label)
    this.itemData.userTypes.forEach((element:any) => {
      if(element.label == label){
        element.isActive = true;
      }else{
        element.isActive = false;
      }
    });
    if(label == "Investor"){
      this.callNewServiceLayout = true;
      this.btnLoginText = "Login /Invest";
      this
    }else{
      this.callNewServiceLayout = false;
      this.btnLoginText = "Login /Register";
    }
  }

  fixNotificationHeader( ) {
    if (this.noticeBannerIsOpened) {
      if (window.innerWidth < 767) { 
        document.documentElement.style.setProperty('--mainContentMobileMargin', '300px');
      }
      else {
        document.documentElement.style.setProperty('--mainContentMargin', '287px');
      }
    }
  }


  initForm = () => {
    this.investNowForm = this._fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
      phone: ['', [Validators.required, Validators.maxLength(10)]],
      city: ['', Validators.required],
      // remarks: ['', [Validators.required]],
      // conditionCheckbox: [''],
      // existingInvestorname: ['', Validators.required],
      // existingInvestorphone: ['', [Validators.required, Validators.maxLength(10)]]
    })
    this.investNowForm1 = this._fb.group({
      existingInvestorname: ['', Validators.required],
      existingInvestorphone: ['', [Validators.required, Validators.maxLength(10)]]
    })
  }
  clearFields() {
    this.otpRequired = false;
    this.otpSubmitted = false;
  }

  blockAlphabetsAndSpecialChars(event: any) {
    const char = event.key;
    // Check if the character is a numeric digit (0-9) or Backspace
    if (!/^[0-9]$/.test(char) && char !== 'Backspace') {
      event.preventDefault(); // Prevent the input of non-numeric characters
    }
    
  }


  moveTo() {
    this.resendOtpRequest = false;
    clearInterval(this.countdownTimeout); // Clear the previous interval
    this.remainingTime = 30; // Reset the countdown time
    this.otpRequired = !this.otpRequired;
    this.investNowForm.reset();
    this.startCountdown()
  }

  moveTo1() {
    clearInterval(this.countdownTimeout); // Clear the previous interval
    this.remainingTime = 30; // Reset the countdown time
    this.otpRequired = !this.otpRequired;
    this.investNowForm1.reset();
    this.startCountdown()
  }

  startCountdown() {
    clearTimeout(this.countdownTimeout); // Clear any existing timeout
    if (this.remainingTime > 0) {
      this.countdownTimeout = setTimeout(() => {
        this.remainingTime--;
        this.startCountdown(); // Recursively call startCountdown
      }, 1000); // Update every 1 second (1000 milliseconds)
    }
  }

  resetCountdown() {
    this.resendOtpRequest = true;
    clearTimeout(this.countdownTimeout); // Clear the countdown timeout
    this.remainingTime = 30; // Reset the remaining time
    this.startCountdown()
  }

  checkboxCondition(event: any) {
    if (event.target.checked) {
      this.filedDefaullt = true;
    }
    else {
      this.filedDefaullt = false;
    }
  }
  onSelect() {
    this.showTextArea = true;
  }

  // -------------------------------

  isChecked: boolean = false;
  otpChecked: any = 0;


  newInvestor: boolean = true;
  existingInvestor: boolean = false;
  email: string = '';
  mobile: string = '';

  newInvestorInput() {
    this.newInvestor = true;
    this.existingInvestor = false;
    this.email = ''; // Clear mobile input if any
  }

  existingInvestorInput() {
    this.existingInvestor = true;
    this.newInvestor = false;
    this.mobile = ''; // Clear email input if any
  }

  clear() {
    this.otpRequired = false;
    this.otpSubmitted = false;
    this.existingInvestor = false;
    this.newInvestor = true;
    this.backToInvest.emit(true);
  }

//  search mob-vew redirect function
  redirectPage(){
    this.router.navigate(['/search2']);
    this.toggleShowSearch();
  }

 

   //  search bar mob view
   fundsForSearch: any = [];
   fullFundsArray: any = [];
   searchTerm: string = '';
   funds: any = [];
   getMutualCard: any;
   selectedFund: any = null;
   showSuggestions: boolean = false;
 
 
 
   @HostListener('window:click', ['$event'])
   onWindowClick(event: Event) {
    event.stopPropagation();
    const className = (event.target as Element).className;
    if (className.includes('accordion-button') || className.includes('dropdown-toggle') || className.includes('block-head') || className.includes('bi-chevron-right')) {
    }
    else {
      this.activeMobileHeaderId = '';
    }
   }

   @HostListener('click', ['$event'])
   getTableDataPage(event: Event) {
      if((event.target as Element).className == "page-overlay"){
        this.toggleShowSideMenu();
        this.activeMobileHeaderId = '';
      }
     if ((event.target as Element).className === 'form-control search ng-untouched ng-pristine ng-valid' || (event.target as Element).className === 'form-control search ng-valid ng-dirty ng-touched' || (event.target as Element).className === 'form-control search ng-valid ng-touched ng-dirty') {
      //  console.log('1')
       this.fundsForSearch = this.fullFundsArray
     }
     else {
      //  console.log('2')
       this.fundsForSearch = []
     }
 
   }

     //  search bar
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
        this.showSuggestions = true;
        this.fundsForSearch = this.funds
        // console.log(this.fundsForSearch)
        this.fundsForSearch = this.fundsForSearch.filter((fund: any) =>
          fund.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
      } else {
        this.showSuggestions = false;
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

    fontResize(size: any){
      this.activeFontSize = size;
      this.commonService.setFontResize(size);
    }
  
    resetFundExplore()
    {
      this.funds = this.fullFundsArray;
      this.searchTerm = '';
    }

    onCloseSidePannel(){
      this.ShowSideMenu = false;
    }

    moveToNextField(event: any){
      let value = event?.target.value;
      let nextInput;
      console.log("Data => ",value, event);
      if(event.keyCode == 8 || event.key == 'Backspace' || event.code == 'Backspace'){
        nextInput = event.srcElement.previousElementSibling; // get the sibling element

      }else if(value){
        nextInput = event.srcElement.nextElementSibling; // get the sibling element
      }
      
      if(!value && !nextInput){
        return;
      }

      var target = event.target || event.srcElement;
      var id = target.id
      console.log(id.maxlength); // prints undefined

      if(nextInput == null)  // check the maxLength from here
          return;
      else
          nextInput.focus();   // focus if not null

    }

    onOpenSearch(){
      this.showModal = true;
    }

    onchangeToggle(data:any){
      setTimeout(() => {
        if(data){
          this.closeNewUIModal();
          this.isNewUiChecked = false;
        }
        else{
          this.openNewUIModal();
          this.isNewUiChecked = true;
        }
      }, 100);
    }

    onRatingSet(rating: number): void {
      console.log(rating)
    }

    closeNewUIModal(){
     (<HTMLInputElement> document.getElementById('overlay')).style.display = 'none';
     this.currentRatting = ''
    }

    openNewUIModal(){
     (<HTMLInputElement> document.getElementById('overlay')).style.display = 'block';

    }

    switchTo(){
      this.router.navigate([]).then(result => {  window.open('https://www.franklintempletonindia.com/', '_blank'); });
    }
    setRatting(r: any){
      this.currentRatting = r;
    }
}