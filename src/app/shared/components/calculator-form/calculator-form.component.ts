import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { CalculatorService } from 'src/app/shared/services/calculator.service';
@Component({
  selector: 'app-calculator-form',
  templateUrl: './calculator-form.component.html',
  styleUrls: ['./calculator-form.component.scss'],
})
export class CalculatorFormComponent implements OnInit {
  @Input() form: any;
  @Output() formChange = new EventEmitter<any>();
  @Input() isSIP = true;
  @Input() isTargeted = false;
  // @Input() isDurationChip = false;
  // @ViewChild('amountSlider') amountSlider: ElementRef | undefined;
  // @ViewChild('periodSlider') periodSlider: ElementRef | undefined;
  // @ViewChild('expectedReturnSlider') expectedReturnSlider: ElementRef | undefined;
  // @ViewChild('myEarningSlider') myEarningSlider: ElementRef | undefined;
  sliderKeyName: any = {
    earn:"earn",
    amount:"amount",
    period:"period",
    expectedReturn:"expectedReturn",
  }

  calcForm!: FormGroup;

  earnSliderStyle: any = "linear-gradient(90deg, #3769ff 0%, #e0e0e07a 0%)";
  amountSliderStyle: any = "linear-gradient(90deg, #3769ff 0%, #e0e0e07a 0%)";
  periodSliderStyle: any = "linear-gradient(90deg, #3769ff 0%, #e0e0e07a 0%)";
  expectedReturnSliderStyle: any = "linear-gradient(90deg, #3769ff 0%, #e0e0e07a 0%)";

  // Constructor
  constructor(private _fb: FormBuilder, private _calcService: CalculatorService) {}

  // LS: After view Init
  ngAfterViewInit(): void {
    // const sliders = document.querySelectorAll('.range-slider');
    // Array.prototype.forEach.call(sliders, (slider) => {
    //   slider.querySelector('input').addEventListener('input', (event: any) => {
    //     this.applyFillSlider(event.target);
    //   });
    //   this.applyFillSlider(slider.querySelector('input'));
    // });
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

  // LS: On Tab values changes Change
  ngOnChanges(changes: SimpleChanges) {
    // console.log("On change", changes);
    if(changes["isTargeted"]){
      this.onCalculatorChange();
      this.handleAllSliderFill();
    }

    if(changes["isSIP"]){
      let initMinAmt = changes["isSIP"].currentValue ? 500 : 1e4;
      this.calcForm.controls['amount'].setValue(initMinAmt);
      this.onCalculatorChange();
      this.handleAllSliderFill();
    }
  }

    // Form Init
    initForm = () => {
    this.calcForm = this._fb.group({
      [this.sliderKeyName.earn]: [500000],
      [this.sliderKeyName.amount]: this.isSIP ? 500 : 1e4,
      [this.sliderKeyName.period]: [20],
      [this.sliderKeyName.expectedReturn]: [12],
      time: ['MONTHLY'],
    });
  };

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
    // let v = this.calcForm.value;
    // this.applyFillSlider(this.amountSlider?.nativeElement, v.amount);
    // this.applyFillSlider(this.periodSlider?.nativeElement, v.period);
    // this.applyFillSlider(this.myEarningSlider?.nativeElement, v.earn);
    // this.applyFillSlider(this.expectedReturnSlider?.nativeElement, v.expectedReturn);
    // console.log("Current values => ", v);
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
      case this.sliderKeyName.earn:
        this.earnSliderStyle = bg;
        break;
        case this.sliderKeyName.amount:
        this.amountSliderStyle = bg;
      break;
      case this.sliderKeyName.period:
        this.periodSliderStyle = bg;
      break;
      case this.sliderKeyName.expectedReturn:
        this.expectedReturnSliderStyle = bg;
      break;
    }
  };

  getInputLimit = (type: any, isMax: any = false) =>{
    let v ;
    const maxEarnAmount = 1e6;
    const minEarnAmount = 5e5;

    const maxAmount = this.isSIP ? 1e6 : 1e8;
    const minAmount = this.isSIP? 500: 1e4;

    const maxPeriod = 30;
    const minPeriod = 1;
    
    const maxReturns = 13;
    const minReturns = 2;

    switch(type){
      case this.sliderKeyName.earn:
        v = isMax ? maxEarnAmount: minEarnAmount;
      break;
      case this.sliderKeyName.amount:
        v = isMax ? maxAmount: minAmount;
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
  

  onCalculatorChange = (e: any= null, type: string= "") => {
    let value: any = e?.target?.value || null;

    const maxLimit = this.getInputLimit(type, true);
    const minLimit = this.getInputLimit(type, false);

    if(type && maxLimit != undefined && minLimit != undefined){
      e.preventDefault();
      let v = value;
      if (Number(value) > maxLimit) {
        v = maxLimit;
      }else if(Number(value) < minLimit ){
        v = minLimit;
      }
      this.calcForm.controls[type].patchValue(v);
    }

    // Form Data
    const {
      amount,
      period,
      time,
      expectedReturn,
      earn,
    } = this.calcForm.value

    // Clear previous calculation
    this.formChange.emit(this.calcForm.value);

    if(!amount || !period){
      return;
    }


    //-> Handle SIP 
    if(this.isSIP){
      if(this.isTargeted){
        let {
          totalInvestAmt,
          installmentAmount
        } = this._calcService.get_sip_targeted_amt(
            earn,
            time,
            period,
            expectedReturn,
        );
        let dataEmit = {
          ...this.calcForm?.value,
          totalInvestAmt,
          installmentAmount
        }
        this.formChange.emit(dataEmit);
      }else{
        let {
          totalInvestAmt,
          totalValues,
          totalReturns
        } = this._calcService.get_sip(
            amount,
            period,
            expectedReturn,
            time
        );
  
        let dataEmit = {
          ...this.calcForm?.value,
          totalInvestAmt,
          totalValues,
          totalReturns
        }
        this.formChange.emit(dataEmit);
      }

    }

    //-> Handle Lumpsum
    if(!this.isSIP){
      if(this.isTargeted){
        let {
          requiredInvestment,
          totalReturns
        } = this._calcService.get_lumpsum_targeted_amt(
          earn,
          period,
          expectedReturn
        );

        let dataEmit = {
          ...this.calcForm?.value,
          totalInvestAmt: requiredInvestment,
          totalReturns
        }
        this.formChange.emit(dataEmit);

      }else{
        let {
          totalInvestAmt,
          totalValues,
          totalReturns
        } = this._calcService.get_lumpsum(
          amount,
          period,
          expectedReturn
        );

        let dataEmit = {
          ...this.calcForm?.value,
          totalInvestAmt,
          totalValues,
          totalReturns
        }
        this.formChange.emit(dataEmit);
      }
    }
    







    

      




  };

  autoFocus(event: any, refId:any){
    $(`#${refId}`).focus();
  }

}
