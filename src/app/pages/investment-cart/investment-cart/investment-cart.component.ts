import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { FundService } from 'src/app/shared/services/fund.service';
import { SolutionsService } from 'src/app/shared/services/solutions/solutions.service';
import { CommonService } from 'src/app/shared/services/common.service';
import { ConfirmationDialogService } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.service';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-investment-cart',
  templateUrl: './investment-cart.component.html',
  styleUrls: ['./investment-cart.component.scss']
})
export class InvestmentCartComponent {
  @ViewChild('stickyButtonsContainer') stickyButtonsContainer: ElementRef | undefined;
  activeTab = 0;
  funds: any = [];
  sideFilterOptions: any;
  showInvestment:string = 'SIP';
  selectedFund: any;
  isCartEmpty: boolean = true;
  offCanvasFromInvestmentOutput: boolean = true 
  selectedCartDetails: any = [];
  showCart: boolean = false;
  totalCartAmount: number = 0;
  cartObjDetails: any;
  makeFundsCardToggle:boolean = true
  titleCart:boolean = false


  
  private dataChangeInvestmetCartSubscription: Subscription;

  constructor(
     private _fundServices: FundService,
     private _solutionsService: SolutionsService,
     private commonService: CommonService,
     private confirmationDialogService: ConfirmationDialogService
     ) {

         // Subscribe to changes in the service
    this.dataChangeInvestmetCartSubscription = this.commonService.getInvestmentData().subscribe((newData) => {
      // Do something with the new data
      console.log('New data received:', newData);
      this.selectedCartDetails.push(newData)
      console.log(this.selectedCartDetails)
    });

     }

  ngOnInit(): void {
    this.findIfcartEmpty();
    this.getMockFunds();
    this.getMockFundsFilter();

  }
  @HostListener('click', ['$event'])
  onClickDateRangePicker(event: Event) {
    // console.log((event.target as Element).className);
    if (this.showCart) {
      if ((event.target as Element).className == 'FT-general-filter cart-aside show') this.showCart = false;
    }
  }  


  @HostListener('window:scroll', ['$event'])
  handleScroll() {
    // Check if the container exists
    if (this.stickyButtonsContainer) {
      const container = this.stickyButtonsContainer.nativeElement;
  
      // Calculate the height from the top of the document to the original position
      const originalPosition = container.offsetTop;
      console.log(originalPosition)
  
      // Calculate the distance scrolled from the top
      const distanceScrolled = window.scrollY;
      console.log(distanceScrolled)
      console.log(distanceScrolled == 1512)

      const forScrollingCheck = 1512;
  
      // Define the distance from the original position to start sticky behavior
      // const startStickyDistance = 0; // Adjust this value based on your design needs
  
      // Apply sticky behavior only after scrolling beyond the original position
      if (distanceScrolled > originalPosition) {
        container.classList.add('sticky-buttons');
      } else if(distanceScrolled == forScrollingCheck)
      {
        console.log('1')
        container.classList.remove('sticky-buttons');
      } else {
        container.classList.remove('sticky-buttons');
      }
    }
  }
  
  
  


  getMockFunds = () => {
    this.funds = []
    this._fundServices.getMockFundsData().subscribe({
      next: (result) => {
        this.funds = result;
        // this.fullFundsArray = result;
        // console.log(this.funds);
        // this.getMutualCard = this.funds.filter((item: any) => item).length;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
  // getFundsDetail = () => {
  //   this._fundServices.getFundsDetailData().subscribe({
  //     next: (result) => {
  //       this.funds = result
  //       console.log(this.funds);
  //     },
  //     error: (err) => {
  //       console.log(err);
  //     }
  //   })
  // }

  getInvestmentData(cart:any)
  {
    this.showInvestment = cart;
    // console.log(this.showInvestment)
  }
  resetActiveTab() {
    this.activeTab = -1;
  }
  getMockFundsFilter = () => {
    this._solutionsService.getMockSolutionsFilterOptions().subscribe({
      next: (result) => {
        this.sideFilterOptions = result
        // console.log(this.sideFilterOptions);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
  changeActiveTab(index: number) {
    this.activeTab = index;
  }
  getTableTitle(fund: any) {
    alert('1')
    this.selectedFund = fund; // Update the selected fund variable
    // console.log(this.selectedFund)
  }
  addToCart(param: any) {
    this.commonService.cartdetails.push(param);
    const cartObj = [param]
    sessionStorage.setItem('cart', JSON.stringify(cartObj));
    this.selectedCartDetails = cartObj;
    this.isCartEmpty = false;
    this.calculateTotalAmt();
  }
  findIfcartEmpty() {
    const cartDetails: any = sessionStorage.getItem('cart');
    const investmentFormObj:any = sessionStorage.getItem('cartDataForAdd');
    const data1 = JSON.parse(cartDetails);
    const data2 = JSON.parse(investmentFormObj)
    const combineDetails : any = 'a'
    console.log(data1,data2)
    let cartAdded = JSON.parse(cartDetails);
    // console.log(cartAdded.length)
    if(cartAdded && cartAdded?.length>0) {
      // this.selectedCartDetails = JSON.parse(cartDetails);
      this.isCartEmpty = false;
      // console.log("here")
      this.calculateTotalAmt()
    }
    else {
      this.isCartEmpty = true;
    }
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
      if(cartAdded?.length > 0 ){
        let newCart = cartAdded.filter((e: any) => e.id != id);
        // this.addTocartDetails = cartAdded;
        sessionStorage.setItem('cart', JSON.stringify(newCart));
         this.commonService.setCartChange(newCart);
      }
      this.findIfcartEmpty();
      this.calculateTotalAmt()
  }
  calculateTotalAmt() {
    // console.log(this.selectedCartDetails)
    this.totalCartAmount = 0;
    this.selectedCartDetails.forEach((element: any) => {
      let amount = Number(element.amount)
      this.totalCartAmount +=  Number(element.amount)
    });
    // return this.totalCartAmount;
  }
  addedCartDetails(event: any) {
    this.showCart = false;
    this.commonService.setCartChange(event);
    this.selectedCartDetails = event;
    this.calculateTotalAmt();
  }
  EditCartDetails(param: any) {
    this.cartObjDetails = param;
    this.showCart = true;
  }
  onCompareToggleChangedDataValueCard(compareToggleData: any)
  {
    // this.funds.push(compareToggleData);
    // console.log(this.funds)
  }
  goToCart(data: any) {
    // this.selectedCartDetails.push(data);
    // console.log('Received data:', this.funds);
  }

  toggleCart()
  {
    this.isCartEmpty = !this.isCartEmpty
    console.log(this.isCartEmpty)
    if(this.isCartEmpty == false)
    {
     this.titleCart = true
    }
    else{
      this.titleCart = false
    }
  }

  onFundAdded(fund: any) {
    // this.fund = fund; // Capture the emitted fund value
    console.log(fund)
  }

  handleAddToCartInInvestment(param: any) {
    console.log('Received in investment component:', param);
    this.isCartEmpty = param;  
    // window.location.reload()
    // setTimeout(()=>{
    //   this.isCartEmpty = param;    
    // },100)
   
  }

  handleaddOffCanvasOutput(value: boolean) {
    console.log('Received value in InvestmentComponent:', value);
    
    // if( value == true)
    // {
    //      this.offCanvasFromInvestmentOutput = false
    // }
  }

  toGoFundsCard()
  {
    this.makeFundsCardToggle = false
  }

  makeToggle()
  {
    this.makeFundsCardToggle = !this.makeFundsCardToggle
  }

  getData(event:any)
  {
    // this.selectedCartDetails.push(event)
    // this.makeFundsCardToggle = !this.makeFundsCardToggle
    // console.log(this.selectedCartDetails)
  }
  

}
