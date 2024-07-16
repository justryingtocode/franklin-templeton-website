import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Options } from 'ngx-slider-v2';

import { CalculatorService } from 'src/app/shared/services/calculator.service';
@Component({
  selector: 'app-top-up-calculator-form',
  templateUrl: './top-up-calculator-form.component.html',
  styleUrls: ['./top-up-calculator-form.component.scss']
})
export class TopUpCalculatorFormComponent implements OnInit, AfterViewInit {
  value:number=100;
  options: Options = {
    floor: 0,
    ceil: 1000
  };

  sliderKeyName: any = {
    amount:"amount",
    increasePercent:"increasePercent",
    increaseAmount:"increaseAmount",
    period:"period",
    expectedReturn:"expectedReturn",
  }

  @Input() form: any;
  @Output() formChange = new EventEmitter<any>();
  @Output() OnRecalculate : EventEmitter<any> = new EventEmitter<any>();
  @Input() isSIP = true;
  @Input() isTargeted = false;

  // @ViewChild('amountSlider') amountSlider: ElementRef | undefined;
  // @ViewChild('periodSlider') periodSlider: ElementRef | undefined;
  // @ViewChild('expectedReturnSlider') expectedReturnSlider: ElementRef | undefined;
  // @ViewChild('myEarningSlider') myEarningSlider: ElementRef | undefined;

  
  calcForm!: FormGroup;

  amountSliderStyle: any = "linear-gradient(90deg, #3769ff 0%, #e0e0e07a 0%)";
  increasePercentSliderStyle: any = "linear-gradient(90deg, #3769ff 0%, #e0e0e07a 0%)";
  increaseAmountSliderStyle: any = "linear-gradient(90deg, #3769ff 0%, #e0e0e07a 0%)";
  periodSliderStyle: any = "linear-gradient(90deg, #3769ff 0%, #e0e0e07a 0%)";
  expectedReturnSliderStyle: any = "linear-gradient(90deg, #3769ff 0%, #e0e0e07a 0%)";
  showBytoggle:boolean = false;
  constructor(private _fb: FormBuilder, private _calcService: CalculatorService) {}

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
      [this.sliderKeyName.amount]: [500],
      time: ['MONTHLY'],
      isIncreaseByPercent: true,
      [this.sliderKeyName.increasePercent]: [50],
      [this.sliderKeyName.increaseAmount]: [0],
      [this.sliderKeyName.period]: [10],
      [this.sliderKeyName.expectedReturn]: [12],
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
      case this.sliderKeyName.increaseAmount:
        this.increaseAmountSliderStyle = bg;
        break;
      case this.sliderKeyName.increasePercent:
        this.increasePercentSliderStyle = bg;
        break;
      case this.sliderKeyName.period:
        this.periodSliderStyle = bg;
      break;
      case this.sliderKeyName.expectedReturn:
        this.expectedReturnSliderStyle = bg;
      break;
    }
  };

    // Get input field min & max limit
    getInputLimit = (type: any, isMax: any= false) =>{
      let v ;
      
      const maxAmount = 1e6;
      const minAmount = 500;
  
      const maxIncreaseAmount = 1e6;
      const minIncreaseAmount = 500;

      const maxIncreasePercent = 1e2;
      const minIncreasePercent = 0;

      const maxPeriod = 30;
      const minPeriod = 1;
      
      const maxReturns = 13;
      const minReturns = 2;
  
      switch(type){
       
        case this.sliderKeyName.amount:
          v = isMax ? maxAmount: minAmount;
        break;
        case this.sliderKeyName.increaseAmount:
          v = isMax ? maxIncreaseAmount: minIncreaseAmount;
        break;
        case this.sliderKeyName.increasePercent:
          v = isMax ? maxIncreasePercent: minIncreasePercent;
        break;
        case this.sliderKeyName.period:
          v = isMax ? maxPeriod: minPeriod;
        break;
        case this.sliderKeyName.expectedReturn:
          v = isMax ? maxReturns: minReturns;
        break;
      }
  
      return v;
    }

    // On Calculation params change
    onCalculatorChange = (e: any= null, type: string= "") => {
      let value: any = e?.target?.value || null;
      const maxLimit = this.getInputLimit(type, true);
      const minLimit = this.getInputLimit(type, false);
  
      // reset values when isIncreaseByPercent gets changed.
      if(type === "isIncreaseByPercent"){
        let isPercentage =  this.calcForm.value.isIncreaseByPercent;
        
        if(isPercentage){
          // let minPercent = this.getInputLimit('increasePercent');
          this.calcForm.controls['increasePercent'].patchValue(50);
          this.calcForm.controls['increaseAmount'].patchValue(0);
        }else{
          let minAmount = this.getInputLimit('increaseAmount');
          this.calcForm.controls['increaseAmount'].patchValue(minAmount);
          this.calcForm.controls['increasePercent'].patchValue(0);
        }
        
      }
  
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
  
      console.log("Data => ", this.calcForm.value)
      if(!this.calcForm || !this.calcForm.value){
        return;
      }
      
      // Form Data
      const {
        amount,
        time,
        increaseAmount,
        increasePercent,
        isIncreaseByPercent,
        period,
        expectedReturn,
      } = this.calcForm.value

  
      // Clear previous calculated Data
      this.formChange.emit(this.calcForm.value);
  
      if(!amount || !period){
        return;
      }
  
      //-> Handle SIP 
      const topupData = this._calcService.get_sip_topup(
        amount,
        time,
        increaseAmount,
        increasePercent,
        period,
        expectedReturn,
        isIncreaseByPercent
      );

      const sipData = this._calcService.get_sip(
        amount,
        period,
        expectedReturn,
        time,
        true  // each Year data
      );
  
      let eachYearData = topupData.eachYearData.map( (t: any) =>{
        let sip: any = {};
        if(sipData && sipData.eachYearData){
          sip = sipData.eachYearData.find( (e: any) =>  e.year === t.year );
          
        }

        return {
          year: t.year,
          topupInvestedAmt: t.investedAmt,
          topupResultantAmt: t.resultantAmt,
          investedAmt: sip?.investedAmt, 
          resultantAmt: sip?.expectedAmt,
        }
      })

      let dataEmit = {
        totalInvestedAmt: sipData.totalInvestAmt,
        totalResultantAmt: sipData.totalValues,
        topupTotalInvestedAmt: topupData.totalInvestedAmt,
        topupTotalResultantAmt: topupData.resultantAmt,
        eachYearData: eachYearData
      }

      this.OnRecalculate.emit(dataEmit)
      this.formChange.emit(dataEmit);


      this.showBytoggle = !this.showBytoggle;
     
    };
 
    autoFocus(event: any, refId:any){
      $(`#${refId}`).focus();
    }
}
