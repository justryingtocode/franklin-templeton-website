import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Options } from 'ngx-slider-v2';
import { ChartData } from 'chart.js';

import { CalculatorService } from 'src/app/shared/services/calculator.service';
@Component({
  selector: 'app-cagr-calculator',
  templateUrl: './cagr-calculator.component.html',
  styleUrls: ['./cagr-calculator.component.scss']
})
export class CagrCalculatorComponent implements OnInit ,AfterViewInit{

  // Constructor
  constructor(private _fb: FormBuilder, private _calcService: CalculatorService) {}



  formValue: any
  retrievedValue: any

  isGraphView: boolean = true;
  sipData: ChartData<'line'> = {
    labels: [],
    datasets: [],
  };
  chartOptions: any = {
    responsive: true,
    elements: {
      line: {
        tension: 0.5,
      },
    },
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      y: {
        grid: {
          color: 'rgba(224, 224, 224, 0.3)',
        },
        ticks: {
          color: '#8189A2',
        },
      },
      x: {
        grid: {
          color: 'rgba(255,255,255,0)',
        },
        ticks: {
          color: '#8189A2',
          font: {
            size: 12
          },
        },
      }
    },
    plugins: {
      tooltip: {
        callbacks: {
          labelTextColor: function (context: any) {
            const datasetLabel = context.dataset.label;
            // Set different colors based on the dataset label
            if (datasetLabel === 'Funds returns : ₹ ') {
              return {
                color: '#00847D',
                backgroundColor: '#000'
              }
            }
            else if (datasetLabel === 'Nifty Midcap Returns : ₹ ') {
              return {
                color: '#00847D',
                backgroundColor: '#fff'
              }
            }
            else if (datasetLabel === 'Nifty Midcap Return : ₹ ') {
              return {
                color: 'gba(216, 175, 231, 1)',
              }
            }
            else {
              return {
                backgroundColor: '#FFf',
                color: '#00847D',
              }
            }
          },
          label: function (tooltipItem: any, data: any) {
            var label = tooltipItem.dataset.label;
            return  label + tooltipItem.dataset.data[tooltipItem.dataIndex];
          },
          title: function (tooltipItem: any, data: any) {
            var label = tooltipItem[0].label;
            var data = tooltipItem[0].formattedValue;
            return (`${label}: ${data}`)
          },
        },

      },
      title: {
        display: false,
        text: '',
      },
      legend: {
        display: false
      },
    },

  };

  

  calcForm!: FormGroup;
  calculatedData: any;

  sliderKeyName: any = {
    initAmount:"initAmount",
    resultantAmt:"resultantAmt",
    period:"period",
  }

  initAmountSliderStyle: any = "linear-gradient(90deg, #3769ff 0%, #e0e0e07a 0%)";
  resultantAmtSliderStyle: any = "linear-gradient(90deg, #3769ff 0%, #e0e0e07a 0%)";
  periodSliderStyle: any = "linear-gradient(90deg, #3769ff 0%, #e0e0e07a 0%)";


  ngAfterViewInit(): void {
    this.handleAllSliderFill();
  }  

  // Set isGraphView
  setIsGraphView(v: any){
    this.isGraphView = v;
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
    [this.sliderKeyName.initAmount]: [10000],
    [this.sliderKeyName.resultantAmt]: [50000000],
    [this.sliderKeyName.period]: [10],
  });
};

// set all slider according to their values.
handleAllSliderFill(){
  if(!this.calcForm){
    return;
  }
  for(let keyName in this.sliderKeyName){
    let v = this.calcForm.value[keyName];

    // handle null value as it gives error on slide
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
    case this.sliderKeyName.initAmount:
      this.initAmountSliderStyle = bg;
      break;
    case this.sliderKeyName.resultantAmt:
      this.resultantAmtSliderStyle = bg;
      break;
    case this.sliderKeyName.period:
      this.periodSliderStyle = bg;
      break;
  }
};

// Get input field min & max limit
getInputLimit = (type: any, isMax: any=false) =>{
  let v ;
  
  const minInitAmount = 1e4;
  const maxInitAmount = 1e8;
    
  const minResultantAmt = 1e4;
  const maxResultantAmt = 1e8;
  
  const minPeriod = 1;
  const maxPeriod = 30;


  switch(type){
    
    case this.sliderKeyName.initAmount:
      v = isMax ? maxInitAmount: minInitAmount;
    break;
    case this.sliderKeyName.resultantAmt:
      v = isMax ? maxResultantAmt: minResultantAmt;
    break;
    case this.sliderKeyName.period:
      v = isMax ? maxPeriod: minPeriod;
    break;
  }

  return v;
}

// Get the Graph latest Object
setGraphValues(d: any=[]){
  let labels: any=[];
  let amountInvested: any = [];
  let initAmount: any = [];
  let finalInvestment: any = [];

  this.sipData = {
    labels: labels,
    datasets: [
      {
        label: 'Funds returns : ₹ ',
        data: amountInvested,
        tension: 0.5,
        backgroundColor: 'rgba(16, 156, 72, 0.20)',
        borderColor: '#109C48',
        pointBackgroundColor: 'transparent',
        pointBorderColor: 'transparent',
        pointHoverBackgroundColor: 'transparent',
        pointHoverBorderColor: 'transparent',
        fill: 'origin'
      },
      {
        label: 'Nifty Midcap Returns : ₹ ',
        data: finalInvestment,
        tension: 0.5,
        backgroundColor: 'rgba(187, 20, 201, 0.20)',
        borderColor: '#BB14C9',
        pointBackgroundColor: 'transparent',
        pointBorderColor: 'transparent',
        pointHoverBackgroundColor: 'transparent',
        pointHoverBorderColor: 'transparent',
        fill: 'origin'
      }
    ],
  }

  if(!d){
    return;
  }

  d.forEach((e: any) => {
    labels.push(e.year);
    amountInvested.push(e.amountInvested);
    finalInvestment.push(e.finalInvestment);
    initAmount.push(e.initAmount);
  });

  this.sipData = {
    labels: labels,
    datasets: [
      {
        label: 'Funds returns : ₹ ',
        data: finalInvestment,
        tension: 0.5,
        backgroundColor: 'rgba(16, 156, 72, 0.20)',
        borderColor: '#109C48',
        pointBackgroundColor: 'transparent',
        pointBorderColor: 'transparent',
        pointHoverBackgroundColor: 'transparent',
        pointHoverBorderColor: 'transparent',
        fill: 'origin'
      },
      {
        label: 'Nifty Midcap Returns : ₹ ',
        data: initAmount ,
        tension: 0.5,
        backgroundColor: 'rgba(187, 20, 201, 0.20)',
        borderColor: '#BB14C9',
        pointBackgroundColor: 'transparent',
        pointBorderColor: 'transparent',
        pointHoverBackgroundColor: 'transparent',
        pointHoverBorderColor: 'transparent',
        fill: 'origin'
      }
    ],
  }

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
    initAmount,
    resultantAmt,
    period,
  } = this.calcForm.value


  // Clear previous calculated Data
  this.calculatedData = {};
  this.setGraphValues();

  if(!initAmount || !period){
    return;
  }

  // -> Handle CAGR 
  const finalData = this._calcService.get_cagr(
    initAmount,
    resultantAmt,
    period
  );
    
  // console.log("Final value => ", finalData);
  this.calculatedData = finalData;
  this.setGraphValues(finalData.eachYearData);


};




 //
  showRiskOptions=false;
  showRecomendedFunds=false;
  toggleShowRiskOptions(){
    this.showRiskOptions=!this.showRiskOptions
  }
  toggleShowRecomendedFunds(){
    this.showRecomendedFunds=!this.showRecomendedFunds
  }

  autoFocus(event: any, refId:any){
    $(`#${refId}`).focus();
  }
}