import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

// Services
import { DatasharingService } from '../../services/datasharing.service';
import { CommonService } from 'src/app/shared/services/common.service';
import { ConfirmationDialogService } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.service';
import { FormGroup } from '@angular/forms';

export interface cardOptions {
  id: number;
};

export interface cardOptions2 {
  radiometer: string;
};

@Component({
  selector: 'app-fund-card1',
  templateUrl: './fund-card1.component.html',
  styleUrls: ['./fund-card1.component.scss'],
})
export class FundCard1Component {
  @Input() fund: any;
  @Input() hasThreeDotOptions: boolean = true;
  @Input() hasComparCardButton: boolean = false;
  @Input() hasAddThreeDot: boolean = false;
  @Input() hasAddNowBtn: boolean = false;
  @Input() navsModal : boolean = true;
  @Input() navModal: boolean = true;
  @Input() navMidTitle: boolean = true;
  @Input() idcDropDown:boolean = false;
  @Input() addtoCartData: boolean = true;
  @Input() buttonsTitle:string = '';
  @Input() hasInvestNowBtn: boolean = true;
  @Input() makeCartToggle: boolean = true
  @Input() hasFundBtn: boolean = true;
  @Input() investmentCartAddForm: boolean = false
  @Input() cardType: string = ""; // EMPTY_WATCHLIST | SOLUTION | CALCULATOR
  @Output() fundOutput: EventEmitter<any> = new EventEmitter<any>();
  // @Output() makeDataToggleCode: EventEmitter<{ toggle: boolean, fund: any }> = new EventEmitter<{ toggle: boolean, fund: any }>();
  @Output() makeDataToggleCode: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() emitComapreCardtoggle: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() addToCartOutput: EventEmitter<any> = new EventEmitter();
  @Output() makeOffCanvasOutput: EventEmitter<boolean> = new EventEmitter<boolean>();


  // SOLUTION -> Build my plan
  @Input() hasAddRemoveButton: boolean = false;
  @Output() addFunds: EventEmitter<any> = new EventEmitter<any>();
  @Output() removeFunds: EventEmitter<any> = new EventEmitter<any>();

  @Output() navOutput: EventEmitter<any> = new EventEmitter<any>();
  @Output() navRemove: EventEmitter<any> = new EventEmitter<any>();

  addComparedMobileAlert: boolean = false
  selectedCartDetails: any;
  // isCartEmpty: boolean = true;

  makeToggle: boolean = true;
  showMobileShareModal: boolean = false;
  makeSaveCancelBtn: boolean = false
  showSaveDialoge = false;
  showComparedDialoge = false
  showShareDialoge: boolean = false;
  showCartSaveDialoge: boolean = false;
  showInvestmentCart: boolean = false;
  showInvestmentCart2: boolean = false
  showCopyDialoge = false;
  // showWatchlistDialoge = false;
  addFundWatchlistAlert: boolean = false
  addComparedCardAlert: boolean = false
  totalCartAmount: number = 0;
  comparedCardIdModal:any;
  comparedCardDataModal:any;
  cartObjDetails: any;
  showCart: boolean = false;
  getFundsData: any = [];
  viewToggle: boolean = false;
  showNewTitleData: boolean = false;
  viewMoreDataToggle: boolean = false;
  showNewTitleDialogToggle: boolean = false;
  showNAVTable = false;
  currentPage = 1;
  itemsPerPage = 10;
  historicalNav: any= [
    { date: '12/06/2023', Nav: 25.9112, NavChange: 0.1443 },
    { date: '09/06/2023', Nav: 25.7669, NavChange: 0.1420 },
    { date: '08/06/2023', Nav: 25.6249, NavChange: -0.0029 },
    { date: '07/06/2023', Nav: 25.6278, NavChange: 0.2088 },
    { date: '06/06/2023', Nav: 25.4190, NavChange: -0.0029 },
    { date: '05/06/2023', Nav: 25.4190, NavChange: -0.0029 },
  ];

  storedEvent1Value:any = 'Growth';
  storedEvent2Value:any = 'Last 30 Days';
  showcalender: boolean = false;
  navDataExpanded: boolean = false;

  // dropdown

  items = ['IDCW', 'Direct-IDCW', 'Super-Growth', 'Monthly-IDCW', 'Weekly-IDCW', "Direct-IDCW"];

  // historyDateForm: FormGroup = new FormGroup({});

  @HostListener('click', ['$event'])
  onClickDateRangePicker(event: Event) {
    if (this.showInvestmentCart) {
      if ((event.target as Element).className == 'bi bi-x-circle') this.showInvestmentCart = false;
    }

    if ((event.target as Element).className == 'btn btn-outline-primary cancelForm') this.showInvestmentCart = false;

    if ((event.target as Element).className == 'btn btn-primary makeDataCartToggle') this.showInvestmentCart = false;

  }

  constructor(private _router: Router, private dataSharingService: DatasharingService, private commonService: CommonService, private confirmationDialogService: ConfirmationDialogService) { }

  ngOnInit(): void {
    console.log('card', this.cardType)
    console.log('a',this.buttonsTitle)
  }

  get historicalNavPaginatedData(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.historicalNav.slice(startIndex, endIndex);
  }

  toggleShowSavDialoge(fund: any) {
    this.showSaveDialoge = !this.showSaveDialoge;
    // console.log(fund);
    this.dataSharingService.setSharedData(fund);
  }

  toggleShowComparedDialoge(fund:any)
  {
    this.showComparedDialoge = !this.showComparedDialoge;
    // this.commonService.setComapreCardData(fund);
  }
  
  toggleShowSavDialoge1() {
    this.showCartSaveDialoge = !this.showCartSaveDialoge;
  }
  toggleShowCopyDialoge() {
    this.showCopyDialoge = !this.showCopyDialoge;
  }
  toggleShareModal() {
    this.showMobileShareModal = !this.showMobileShareModal;
  }
  toggleShowShareDialoge() {
    this.showShareDialoge = false
  }
  toggleNewShareDataModal() {
    this.showShareDialoge = !this.showShareDialoge
  }
  routeModuleCompareFund(id: any, value:any) {
    this.comparedCardIdModal = id
    this.comparedCardDataModal = value
    this.showComparedDialoge = !this.showComparedDialoge;
    // this._router.navigate([`/compare-fund/${id}`]);
    // this.commonService.setComapreCardData(value);
  }

  routeToComparedCard()
  {
    var existingDataString = localStorage.getItem('comparedCard');
    var existingData = existingDataString ? JSON.parse(existingDataString) : [];
    var data = [...existingData, this.comparedCardDataModal];
    console.log(data)
    var dataString = JSON.stringify(data);
    console.log(dataString)
    localStorage.setItem('comparedCard', dataString);

    this._router.navigate([`/compare-fund/${this.comparedCardIdModal}`]);
    this.commonService.setComapreCardData(this.comparedCardDataModal);
  }

  getCheckboxValue(event: any) {

  }
  toggleGroup(value: any) {
    if (value === 'SIP Investment') {
      this.makeToggle = true;
    } else if (value === 'Lumpsum Investment') {
      this.makeToggle = false;
    }
    else {
      this.makeToggle = true;
    }
  }
  contentOnHoverCLose(param: any) {
    document.getElementById(param)?.click();
  }
  fundDetails(param: any) {
    this._router.navigateByUrl('/funds/' + param.id, { state: { ...param } });
  }

  // Add now 
  addToCart(param: any) {
    this.getFundsData = param
    // console.log('a',param)
    // this.commonService.cartdetails.push(param);
    // const cartObj = [param]
    // sessionStorage.setItem('cart', JSON.stringify(cartObj));
    // this.selectedCartDetails = cartObj;
    // this.isCartEmpty = false;
    // this.calculateTotalAmt();
    this.commonService.cartdetails.push(param);
    const cartObj = [param];
    sessionStorage.setItem('cart', JSON.stringify(cartObj));
    this.selectedCartDetails = cartObj;
    // console.log(this.selectedCartDetails)
    this.showInvestmentCart = true;

    // console.log(this.hasFundBtn)

    if (this.hasFundBtn == true) {
      const makeOffcanvasToggle = true
      this.makeOffCanvasOutput.emit(makeOffcanvasToggle);
      // console.log(makeOffcanvasToggle)
      // console.log('1',this.selectedCartDetails)
      this.selectedCartDetails = param;
      // console.log(this.selectedCartDetails)
    }
    // this.isCartEmpty = false;

    // Emit the param value through the output
    // this.addToCartOutput.emit(this.isCartEmpty);
    // this.calculateTotalAmt();
  }

  calculateTotalAmt() {
    // console.log(this.selectedCartDetails)
    this.totalCartAmount = 0;
    this.selectedCartDetails.forEach((element: any) => {
      let amount = Number(element.amount)
      this.totalCartAmount += Number(element.amount)
    });
    // return this.totalCartAmount;
  }

  goToCart(fund: any) {
    this.getFundsData = fund
    // console.log('fund',fund)
    this.fundOutput.emit(fund);
    // this.showWatchlistDialoge = !this.showWatchlistDialoge;
    // this.showInvestmentCart = true;
    // this.addFundWatchlistAlert = !this.addFundWatchlistAlert
    sessionStorage.removeItem('getAddDataCard')
    // if(this.hasFundBtn == false)
    // {
    //   console.log('1')
    //   this.selectedCartDetails = fund
    // }
    this.addFundWatchlistAlert = !this.addFundWatchlistAlert
    // document.getElementById('forRoute')?.click();
    this.hasComparCardButton = false

  }

  goToCartForCompareCrad(fund:any)
  {
    const makeToggleCompareCard: boolean = true;
    // this.makeDataToggleCode.emit({ toggle: makeToggleCompareCard, fund: fund });
    this.makeDataToggleCode.emit(makeToggleCompareCard);
    this.commonService.setComapreCardData(fund);
    this.addComparedCardAlert = true;
  }


  goToCartForCompareEmpty(fund:any)
  {
    console.log(fund)
    this.commonService.setComapreCardData(fund);
    const data : boolean = true;
    this.emitComapreCardtoggle.emit(data)
  }

  goToWatchList(fund: any) {
    // console.log('fund',fund)
    this.fundOutput.emit(fund);
    sessionStorage.removeItem('getAddDataCard')
  }

  goToCart2(fund: any) {
    const getAddDataCard = fund
    // console.log('fund',getAddDataCard)
    sessionStorage.setItem('getAddDataCard', JSON.stringify(getAddDataCard))
    // this.showWatchlistDialoge = !this.showWatchlistDialoge;
    this.addFundWatchlistAlert = !this.addFundWatchlistAlert
    // document.getElementById('forRoute')?.click();

  }

  toggleShowComparedCardDialoge()
  {
    this.addComparedCardAlert = !this.addComparedCardAlert;
  }

  toggleShowWatchlistDialoge() {
    this.addFundWatchlistAlert = !this.addFundWatchlistAlert;
  }

  deleteCartObj(param: any) {
    this.confirmationDialogService.confirm('Delete',
      'Are you sure you want to delete?', 120)

      .then(() => {
        this.selectedCartDetails = this.selectedCartDetails.filter((e: any) => e.id != param.id);
        this.updateCartStatus(param.id);

        // this.confirmAddNew(requestATMData);
      }).catch(() => console.log('User dismissed the dialog'));

  }
  updateCartStatus(id: any) {
    const cartState: any = sessionStorage.getItem('cart');
    let cartAdded = JSON.parse(cartState);
    if (cartAdded?.length > 0) {
      let newCart = cartAdded.filter((e: any) => e.id != id);
      // this.addTocartDetails = cartAdded;
      sessionStorage.setItem('cart', JSON.stringify(newCart));
      this.commonService.setCartChange(newCart);
    }
    // this.findIfcartEmpty();
    // this.calculateTotalAmt()
  }


  // goToDataPage(fund: any) {
  //   console.log(fund);
  //   this.dataSharingService.setSharedData(fund);
  //   // document.getElementById('forRoute')?.click();
  //   // sessionStorage.setItem('datacard', JSON.stringify(fund))
  //   // this._router.navigateByUrl('watchlist', { state: { ...fund } });
  // }

  addToOutput(param: any) {
    this.addToCartOutput.emit(param);
  }

  EditCartDetails(param: any) {
    this.cartObjDetails = param;
    this.showCart = true;
    this.showInvestmentCart = true
    this.makeSaveCancelBtn = true
  }



  // Solution page
  addFundsToSolution(fund: any) {
    this.addFunds.emit(fund);
  }
  removeFundsFromSolution(fund: any) {
    this.removeFunds.emit(fund);
  }

  addNow(fund: any) {
    fund.isAdded = true;
    this.goToNav(fund);
  }

  remove(fund: any) {
    fund.isAdded = false;
    this.removeCardNav(fund);
    // Additional logic if needed when removing
  }

  goToNav(fund:any)
  {
     this.navOutput.emit(fund);
  }

  removeCardNav(fund: any)
  {
     this.navRemove.emit(fund);
  }

  toggleViewMoreDeatilsButton()
  {
    this.viewToggle = !this.viewToggle;
    this.showNewTitleData = !this.showNewTitleData;
  }

  toggleViewDialogDeatilsButton()
  {
    this.viewMoreDataToggle = !this.viewMoreDataToggle;
    this.showNewTitleDialogToggle = !this.showNewTitleDialogToggle;
  }

  toggleNAVTable() {
    this.showNAVTable = !this.showNAVTable
  }

  getAccodian1SelectValue(event:any)
  {
      console.log(event)
      this.storedEvent1Value = event
  }

  getAccodian2SelectValue(event:any)
  {
      console.log(event)
      this.storedEvent2Value = event
  }

  showCalender()
  {
    this.showcalender = !this.showcalender
  }
  goToCartForCompareMobile(fund:any)
  {
    this.addComparedMobileAlert = true;
  }
  toggleShowComparedMobileDialoge()
  {
    this.addComparedMobileAlert = !this.addComparedMobileAlert;
    const makeToggleCompareCard: boolean = true;
    // this.makeDataToggleCode.emit({ toggle: makeToggleCompareCard, fund: fund });
    this.makeDataToggleCode.emit(makeToggleCompareCard);
  }
  historicalNavDataToggle() {
    this.navDataExpanded = true;
  }

  radiometerData(id: cardOptions, get: any) {
    console.log('a', id, get)
    // this._router.navigateByUrl(['/funds', id], { state: { radiometer } });
    this._router.navigateByUrl('/funds/' + id, { state: { get } });
  }

  // -----------------------------------------

  slideConfig = {
    infinite: false,
    dots: false,
    arrows: true,
    prevArrow:"<button type='button' class='btn btn-outline-secondary fund-card1-icon left-arrow' ><i class='bi bi-arrow-left-short card1-arrow'  ></i></button>",
    nextArrow:"<button type='button' class='btn btn-outline-secondary fund-card2-icon right-arrow'><i class='bi-arrow-right-short'></i></button>",

    slidesToShow:3.75,
    slidesToScroll: 1,
    swipeToSlide: true, 
    touchThreshold: 100,
    responsive: [
        {
            breakpoint: 992,
            settings: {
              slidesToShow:1,
                slidesToScroll: 1
            }
        }
        ,
        {
            breakpoint: 768,
            
            settings: {
              arrows: false,
              slidesToShow:3.75,
                slidesToScroll: 1
            }
        }
        ,
        {
            breakpoint: 576,
            
            settings: {
              arrows: false,
              slidesToShow:2.3,
                slidesToScroll: 1
            }
        }
    ]
  };
  // ------------------------------------------------








}
