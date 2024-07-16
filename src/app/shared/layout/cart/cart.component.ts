import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonService } from '../../services/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @Input('cartData') cartData: any;
  @Input() hasInvestmentBtn : boolean = false
  @Input() hasCancelSaveBtn: boolean = false
  @Input() getFundsData:any;
  @Input() investmentCartAddForm: boolean = false
  @Output() addCartDetailsEmit: EventEmitter<any> = new EventEmitter();
  @Output() addToDataOutput: EventEmitter<any> = new EventEmitter();
  @ViewChild ('cancelForm') cancelForm: any;
  isCartEmpty: boolean = true;
  timeState: string = '';
  defaultText: string = 'text' 
  inputState: string= 'percentage';
  cartDetailsForm!: FormGroup
  getTitile:any
  showCart = false;
  toggleState: boolean = true; 
  getPercentageByCheckox: boolean = false;
  sipTimeFrames: any;
  addTocartDetails: Array<any> = [];
  comparedCardIdModal: any;
  comparedCardDataModal: any;
  ngOnInit(): void {
    // console.log(this.cartData);
    // console.log('getFundsData',this.getFundsData)
    this.getTitile = this.getFundsData?.title
    this.initForm()
  }
  constructor(private _fb: FormBuilder, private commonService: CommonService, private _router: Router) { }

  initForm = () => {
    this.cartDetailsForm = this._fb.group({
      planOption: ['growth'],
      amount: [20000],
      period: [''],
      sipfrequency: ['monthly'],
      sipUntil: [''],
      sipTimeFrame: [''],
      sipAnnualIncreaseRate: []
    });
  };
  toggleCart() {
    this.showCart = !this.showCart
  }
  addCartDetails(event: Event){
    const cartState: any = sessionStorage.getItem('cart');
    console.log('a',cartState)
    let cartAdded = JSON.parse(cartState);
    if(cartAdded?.length > 0 ){
      // console.log(this.cartDetailsForm.value);
      let cartObj = {
        ...this.cartData,
        ...this.cartDetailsForm?.value,
        isExpanded: false
      }
      console.log(cartAdded)
      cartAdded?.push(cartObj)
      this.addTocartDetails = cartAdded;
      console.log('b',cartAdded)
      sessionStorage.setItem('cart', JSON.stringify(cartAdded));
    }
    else { 
      let cartObj = {
        ...this.cartData,
        ...this.cartDetailsForm?.value,
        isExpanded: false
      }
      this.addTocartDetails.push(cartObj)
      sessionStorage.setItem('cart', JSON.stringify(this.addTocartDetails));
      console.log(this.addTocartDetails)
    }
    this.addCartDetailsEmit.emit(this.addTocartDetails)

  }

  addInvestmentDetails(event: Event)
  {
    const cartAdded :any = []
    // const cartState: any = sessionStorage.getItem('cart');
    // console.log('a',cartState)
    // let cartAdded = JSON.parse(cartState);
    // if(cartAdded?.length > 0 ){
      // console.log(this.cartDetailsForm.value);
      let cartObj = {
        // ...this.cartData,
        ...this.cartDetailsForm?.value,
        isExpanded: false
      }
      console.log(cartAdded)
      cartAdded?.push(cartObj)
      // this.addTocartDetails = cartAdded;
      console.log('b',cartAdded)
      sessionStorage.setItem('cartDataForAdd', JSON.stringify(cartAdded));
    // }
    // else { 
    //   let cartObj = {
    //     // ...this.cartData,
    //     ...this.cartDetailsForm?.value,
    //     isExpanded: false
    //   }
    //   this.addTocartDetails.push(cartObj)
    //   sessionStorage.setItem('cartDataForAdd', JSON.stringify(this.addTocartDetails));
    //   console.log(this.addTocartDetails)
    // }
    // this.addCartDetailsEmit.emit(this.addTocartDetails)
    this.isCartEmpty = false 
    this.addToDataOutput.emit(this.isCartEmpty);

    console.log('1 getFundsData',this.getFundsData)
    const newData = this.getFundsData;
    this.commonService.setInvestmentData(newData)
    // if(this.getFundsData.length>0)
    // {
    //   console.log('1',this.getFundsData)
    // }
  }

  addInvestmentDetails2(event: Event)
  {
    setTimeout(() => {
      const cartAdded :any = []
      let cartObj = {
        ...this.cartDetailsForm?.value,
        isExpanded: false
      }
      console.log(cartAdded)
      cartAdded?.push(cartObj)
      console.log('b',cartAdded)
      sessionStorage.setItem('cartDataForAdd', JSON.stringify(cartAdded));
    this.isCartEmpty = false 
    this.addToDataOutput.emit(this.isCartEmpty);
    console.log('12 getTypeFundsData',this.getFundsData)
    const newData = this.getFundsData;
    this.commonService.setInvestmentData(newData)
    }, 10);

  }



  cancelInvestForm()
  {
    console.log(this.showCart)
    this.showCart = true
    console.log(this.showCart)
  
  }

  getCheckBoxValue(event:any)
  {
     console.log(event.target.checked);
     const checked = event.target.checked
     if(checked == true)
     {
      this.getPercentageByCheckox = true
     }
     else{
      this.getPercentageByCheckox = false
     }
  }

  changeState() {
    // Toggle the state when the checkbox changes
    this.toggleState = !this.toggleState;
  }

  onInputFocus() {
    if (this.timeState === 'date') {
      this.defaultText = 'date';
    }
  }


  routeToComparedCard()
  {
    // var existingDataString = localStorage.getItem('comparedCard');
    // var existingData = existingDataString ? JSON.parse(existingDataString) : [];
    // var data = [...existingData, this.comparedCardIdModal];
    // console.log(data)
    // var dataString = JSON.stringify(data);
    // console.log(dataString)
    // localStorage.setItem('comparedCard', dataString);

    // this._router.navigate([`/investment-cart`]);
    // this.commonService.setComapreCardData(this.comparedCardDataModal);
  }

  // addToCart(id: any){
  //   $(`#${id}`).addClass("show");
  // }

  // cartToggle:boolean= false;

  // filterBoxModal:boolean = true;

  // addToCart(){
  // this.cartToggle = true;
  // }
  
}
