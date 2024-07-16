import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { CalculatorService } from 'src/app/shared/services/calculator.service';
@Component({
  selector: 'app-swp-calculator',
  templateUrl: './swp-calculator.component.html',
  styleUrls: ['./swp-calculator.component.scss']
})
export class SwpCalculatorComponent implements OnInit {
  
  
  showRiskOptions=false;
  showRecomendedFunds=false;
  toggleShowRiskOptions(){
    this.showRiskOptions=!this.showRiskOptions
  }
  toggleShowRecomendedFunds(){
    this.showRecomendedFunds=!this.showRecomendedFunds
  }

  // Constructor
  constructor(private _fb: FormBuilder, private _calcService: CalculatorService) {}


  calcForm!: FormGroup;
  calculatedData: any;

  sliderKeyName: any = {
    amount:"amount",
    withdraw:"withdraw",
    period:"period",
    expectedROR:"expectedROR",
  }

  amountSliderStyle: any = "linear-gradient(90deg, #3769ff 0%, #e0e0e07a 0%)";
  withdrawSliderStyle: any = "linear-gradient(90deg, #3769ff 0%, #e0e0e07a 0%)";
  periodSliderStyle: any = "linear-gradient(90deg, #3769ff 0%, #e0e0e07a 0%)";
  expectedRORSliderStyle: any = "linear-gradient(90deg, #3769ff 0%, #e0e0e07a 0%)";


  ngAfterViewInit(): void {
    this.handleAllSliderFill();
  }  

  // LS: On Init
  ngOnInit(): void {
    // Init form
    this.initForm();

    // slider track color handle on form value change
    this.calcForm.valueChanges.subscribe((v) => {
      this.handleAllSliderFill();
    });
    this.onCalculatorChange();
  }

  // Form Init
initForm = () => {
  this.calcForm = this._fb.group({
    [this.sliderKeyName.amount]: [100000],
    time: ['MONTHLY'],
    [this.sliderKeyName.period]: [10],
    [this.sliderKeyName.withdraw]: [2000],
    [this.sliderKeyName.expectedROR]: [8],
  });
};

// set all slider according to their values.
handleAllSliderFill(){
  if(!this.calcForm){
    return;
  }
  for(let keyName in this.sliderKeyName) {
    let v = this.calcForm.value[keyName];

    if(v == undefined){
      v = this.getInputLimit(keyName);
    }
    this.applyFillSlider(keyName, v);
  }
}

// Handle slide track color
applyFillSlider = (type: any, value:any = null, slider: any=null) => {
  let element = slider;
  if(slider && slider.hasOwnProperty('first')){
    element = slider.first.nativeElement;
  }else if(slider && slider.hasOwnProperty('nativeElement')){
    element = slider.nativeElement;
  }
  
  let currentValue = value || element?.value || 0;

  const settings = {
    fill: '#3769ff',
    background: '#e0e0e07a',
  };

  let minValue: any = this.getInputLimit(type, false);
  let maxValue: any = this.getInputLimit(type, true)

  let percentage = ((currentValue - minValue)) * 100/ (maxValue - minValue);
  if(!isNaN(Number(currentValue)) && Number(currentValue) > Number(maxValue)){
    percentage = 100;
  }else if(currentValue <= 0 ){
    percentage = 0;
  }

  
  const bg = `linear-gradient(90deg, ${settings.fill} ${percentage}%, ${settings.background} ${percentage + 0.1}%) !important`;

  switch(type){
    case this.sliderKeyName.amount:
      this.amountSliderStyle = bg;
      break;
    case this.sliderKeyName.period:
      this.periodSliderStyle = bg;
      break;
    case this.sliderKeyName.withdraw:
      this.withdrawSliderStyle = bg;
    break;
    case this.sliderKeyName.expectedROR:
      this.expectedRORSliderStyle = bg;
    break;
  }
};

// Get input field min & max limit
getInputLimit = (type: any, isMax: any= false) =>{
  let v ;
  
  const minAmount = 1e4;
  const maxAmount = 1e8;
    
  const minWithdraw = 500;
  const maxWithdraw = 1e6;
  
  const minPeriod = 1;
  const maxPeriod = 30;
  
  const minExpectedROR = 2;
  const maxExpectedROR = 13;

  switch(type){
    
    case this.sliderKeyName.amount:
      v = isMax ? maxAmount: minAmount;
    break;
    case this.sliderKeyName.withdraw:
      v = isMax ? maxWithdraw: minWithdraw;
    break;
    case this.sliderKeyName.period:
      v = isMax ? maxPeriod: minPeriod;
    break;
    case this.sliderKeyName.expectedROR:
      v = isMax ? maxExpectedROR: minExpectedROR;
    break;
  }

  return v;
}

// On Calculation params change
onCalculatorChange = (e: any= null, type: string= "") => {
  let value: any = e?.target?.value || null;
  const maxLimit = this.getInputLimit(type, true);
  const minLimit = this.getInputLimit(type, false);


  if(type && maxLimit != undefined && minLimit != undefined 
    && Object.values(this.sliderKeyName).includes(type)){
    e.preventDefault();
    let v = value;
    if (Number(value) > maxLimit) {
      v = maxLimit;
    }else if(Number(value) < minLimit ){
      v = minLimit;
    }
    this.calcForm.controls[type].patchValue(v);
  }

  if(!this.calcForm || !this.calcForm.value){
    return;
  }
  
  // Form Data
  const {
    amount,
    time,
    period,
    withdraw,
    expectedROR,
  } = this.calcForm.value


  // Clear previous calculated Data
  this.calculatedData = {};

  if(!amount || !period){
    return;
  }

  // -> Handle SIP 
  const finalData = this._calcService.get_swp(
    amount,
    time,
    period,
    withdraw,
    expectedROR,
  );
    
  // console.log("Final value => ", finalData);
  this.calculatedData = finalData;


};

autoFocus(event: any, refId:any){
  $(`#${refId}`).focus();
}



  

  
}
