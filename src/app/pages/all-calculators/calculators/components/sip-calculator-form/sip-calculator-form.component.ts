import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, ViewChildren, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Options } from 'ngx-slider-v2';

import { CalculatorService } from 'src/app/shared/services/calculator.service';
@Component({
  selector: 'app-sip-calculator-form',
  templateUrl: './sip-calculator-form.component.html',
  styleUrls: ['./sip-calculator-form.component.scss']
})
export class SipCalculatorFormComponent implements OnInit, AfterViewInit {
  value: number = 100;
  options: Options = {
    floor: 0,
    ceil: 1000
  };

  readonly sipType: any  = {
    normal: 'normal',
    amount: 'amount',
    year: 'year',
  }

  sliderKeyName: any = {
    earn: "earn",
    amount: "amount",
    period: "period",
    expectedReturn: "expectedReturn",
  }

  @Input() form: any;
  @Output() formChange = new EventEmitter<any>();
  @Output() OnRecalculate: EventEmitter<any> = new EventEmitter<any>();
  @Input() selectedSipType = this.sipType.normal;
  calcForm!: FormGroup;

  earnSliderStyle: any = "linear-gradient(90deg, #3769ff 0%, #e0e0e07a 0%)";
  amountSliderStyle: any = "linear-gradient(90deg, #3769ff 0%, #e0e0e07a 0%)";
  periodSliderStyle: any = "linear-gradient(90deg, #3769ff 0%, #e0e0e07a 0%)";
  expectedReturnSliderStyle: any = "linear-gradient(90deg, #3769ff 0%, #e0e0e07a 0%)";

  periodLable: any = (this.selectedSipType == "normal") ? "Over a period" : "After a period";
  constructor(private _fb: FormBuilder, private _calcService: CalculatorService) { }

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

  // LS: On tab change handle
  ngOnChanges(changes: SimpleChanges) {
    if (changes && changes.hasOwnProperty('selectedSipType')) {
      this.onCalculatorChange();
      this.handleAllSliderFill();
      this.periodLable= (this.selectedSipType == "normal") ? "Over a period of" : "After a period of";
    }

    // if(changes && changes.hasOwnProperty('isSIP')){
    //   let initMinAmt = changes["isSIP"]?.currentValue ? 500 : 1e4;
    //   this.calcForm?.controls['amount'].setValue(initMinAmt);
    //   this.onCalculatorChange();
    //   this.handleAllSliderFill();
    // }
  }

  // Form Init
  initForm = () => {
    this.calcForm = this._fb.group({
      [this.sliderKeyName.earn]: [500000],
      [this.sliderKeyName.amount]: 500,
      [this.sliderKeyName.period]: [20],
      [this.sliderKeyName.expectedReturn]: [12],
      time: ['MONTHLY'],
    });
  };

  // set all slider according to their values.
  handleAllSliderFill() {
    if (!this.calcForm) {
      return;
    }
    for(let keyName in this.sliderKeyName) {
      let v = this.calcForm.value[keyName];
      
      // handle null value as it gives error on slide
      if(v == undefined){
        v = this.getInputLimit(keyName);
      }
      this.applyFillSlider(keyName, v);
    }

    // let {
    //   amount,
    //   period,
    //   earn,
    //   expectedReturn
    // } = this.calcForm.value;

    // let myEarningSlider: any = this.myEarningSlider;
    // let amountSlider: any = this.amountSlider;

    // if(!myEarningSlider){
    //   myEarningSlider = document.getElementById("customRange_earn")
    // }
    // if(!amountSlider){
    //   amountSlider = document.getElementById("customRange_amount")
    // }

    // this.applyFillSlider("earn", earn);
    // this.applyFillSlider("amount", amount);
    // this.applyFillSlider("period", period);
    // this.applyFillSlider("expectedReturn", expectedReturn);
  }


  // Handle slide track color
  applyFillSlider = (type: any, value: any = null, slider: any = null) => {
    let element = slider;
    if (slider && slider.hasOwnProperty('first')) {
      element = slider.first.nativeElement;
    } else if (slider && slider.hasOwnProperty('nativeElement')) {
      element = slider.nativeElement;
    }

    let currentValue = value || element?.value || 0;

    const settings = {
      fill: '#3769ff',
      background: '#e0e0e07a',
    };

    let minValue: any = this.getInputLimit(type, false);
    let maxValue: any = this.getInputLimit(type, true)

    let percentage = ((currentValue - minValue)) * 100 / (maxValue - minValue);
    if (!isNaN(Number(currentValue)) && Number(currentValue) > Number(maxValue)) {
      percentage = 100;
    } else if (currentValue <= 0) {
      percentage = 0;
    }


    const bg = `linear-gradient(90deg, ${settings.fill} ${percentage}%, ${settings.background} ${percentage + 0.1}%) !important`;
    // if(element?.style){
    // element.style.background = bg;
    // }
    // console.log(type,bg);
    switch (type) {
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

  // Get input field min & max limit
  getInputLimit = (type: any, isMax: any = false) => {
    let v;
    const maxEarnAmount = 1e8;
    const minEarnAmount = 5e5;

    const maxAmount = 1e6;
    const minAmount = 500;

    const maxPeriod = 30;
    const minPeriod = 1;

    const maxReturns = 13;
    const minReturns = 2;

    switch (type) {
      case this.sliderKeyName.earn:
        v = isMax ? maxEarnAmount : minEarnAmount;
        break;
      case this.sliderKeyName.amount:
        v = isMax ? maxAmount : minAmount;
        break;
      case this.sliderKeyName.period:
        v = isMax ? maxPeriod : minPeriod;
        break;
      case this.sliderKeyName.expectedReturn:
        v = isMax ? maxReturns : minReturns;
        break;
    }

    return v;
  }

  // fields visible
  handleFieldVisibility(fieldName: any) {
    const selectedSipType = this.selectedSipType;
    const fieldConfig: any = {
      normal: [
        'amount',
        'time',
        'period',
        'expectedReturn'
      ],
      amount:[
        'earn',
        'time',
        'period',
        'expectedReturn'
      ],
      year:[
        'amount',
        'earn',
        'time',
        'expectedReturn'
      ]
    }
    return fieldConfig[selectedSipType].includes(fieldName);
  }

  onCalculatorChange = (e: any = null, type: string = "") => {
    let value: any = e?.target?.value || null;
    const maxLimit = this.getInputLimit(type, true);
    const minLimit = this.getInputLimit(type, false);


    if (type && maxLimit != undefined && minLimit != undefined) {
      e.preventDefault();
      let v = value;
      if (Number(value) > maxLimit) {
        v = maxLimit;
      } else if (Number(value) < minLimit) {
        v = minLimit;
      }
      if(!v){
        v = minLimit;
      }
      this.calcForm.controls[type].patchValue(v);
    }

    if (!this.calcForm) {
      return;
    }

    // Form Data
    const {
      amount,
      period,
      time,
      expectedReturn,
      earn,
    } = this.calcForm.value

    // Clear previous calculated Data
    this.formChange.emit(this.calcForm.value);
    this.OnRecalculate.emit({});

    if (!amount || !period) {
      return;
    }

    //-> Handle SIP 
    if (this.selectedSipType === this.sipType.normal) {
      let {
        totalInvestAmt,
        totalValues,
        totalReturns,
        eachYearData
      } = this._calcService.get_sip(
        amount,
        period,
        expectedReturn,
        time,
        true  // each Year data
      );

      let dataEmit = {
        ...this.calcForm?.value,
        totalInvestAmt,
        totalValues,
        totalReturns,
        eachYearData
      }
      this.OnRecalculate.emit(dataEmit)
      this.formChange.emit(dataEmit);
    } else if(this.selectedSipType === this.sipType.amount) {
      let {
        totalInvestAmt,
        installmentAmount,
        eachYearData
      } = this._calcService.get_sip_targeted_amt(
        earn,
        time,
        period,
        expectedReturn,
        true
      );
      let dataEmit = {
        ...this.calcForm?.value,
        totalInvestAmt,
        installmentAmount,
        eachYearData
      }
      this.OnRecalculate.emit(dataEmit)
      this.formChange.emit(dataEmit);
      
    }else if(this.selectedSipType === this.sipType.year){
      let {
        targetYear,
        eachYearData
      } = this._calcService.get_sip_targeted_year(
        amount,
        earn,
        time,
        expectedReturn
      );
      console.log("targetYear",targetYear);
      
      let dataEmit = {
        ...this.calcForm?.value,
        targetYear,
        eachYearData
      }
      this.OnRecalculate.emit(dataEmit)
      this.formChange.emit(dataEmit);
    }
    
  };

  autoFocus(event: any, refId:any){
    $(`#${refId}`).focus();
  }



}
