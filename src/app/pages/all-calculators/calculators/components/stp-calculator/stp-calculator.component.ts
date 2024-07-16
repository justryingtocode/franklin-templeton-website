import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Options } from 'ngx-slider-v2';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

import { CalculatorService } from 'src/app/shared/services/calculator.service';
@Component({
  selector: 'app-stp-calculator',
  templateUrl: './stp-calculator.component.html',
  styleUrls: ['./stp-calculator.component.scss']
})
export class StpCalculatorComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  // Constructor
  constructor(private _fb: FormBuilder, private _calcService: CalculatorService) {}


  calcForm!: FormGroup;
  calculatedData: any;
  isGraphView: boolean = true;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {
        stacked: true,
        grid: {
          display:false
        },
        ticks: {
          display:false
        },
      },
      y: {
        min: 10,
        stacked: true,
        grid: {
          display:false
        },
        ticks: {
          color: 'transparent',
          display:false
        },
      },
    },
    plugins: {
      legend: {
        display: true,
      },
      
    },
  };
  public barChartType: ChartType = 'bar';

  public barChartData: ChartData<'bar'> = {
    labels: [],
    datasets: [
      { data: [], label: 'Equity Funds',backgroundColor:"#3769FF" },
      { data: [], label: 'Liquid Funds',backgroundColor:"#14C9C9" },
    ],
  };

  // events
  public chartClicked({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: object[];
  }): void {
    // console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: object[];
  }): void {
    // console.log(event, active);
  }
  value:number=100;
  options: Options = {
    floor: 0,
    ceil: 1000
  };

  sliderKeyName: any = {
    sourceFund:"sourceFund",
    targetFund:"targetFund",
    period:"period",
    sourceROR:"sourceROR",
    targetROR:"targetROR",
  }

  sourceFundSliderStyle: any = "linear-gradient(90deg, #3769ff 0%, #e0e0e07a 0%)";
  targetFundSliderStyle: any = "linear-gradient(90deg, #3769ff 0%, #e0e0e07a 0%)";
  periodSliderStyle: any = "linear-gradient(90deg, #3769ff 0%, #e0e0e07a 0%)";
  sourceRORSliderStyle: any = "linear-gradient(90deg, #3769ff 0%, #e0e0e07a 0%)";
  targetRORSliderStyle: any = "linear-gradient(90deg, #3769ff 0%, #e0e0e07a 0%)";


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
    [this.sliderKeyName.sourceFund]: [10000],
    [this.sliderKeyName.targetFund]: [500],
    time: ['MONTHLY'],
    [this.sliderKeyName.period]: [20],
    [this.sliderKeyName.sourceROR]: [5],
    [this.sliderKeyName.targetROR]: [10],
  });
};

// set all slider according to their values.
handleAllSliderFill(){
  if(!this.calcForm){
    return;
  }
  for(let keyName in this.sliderKeyName) {
    let v = this.calcForm.value[keyName];
    
    if(v != undefined){
      this.applyFillSlider(keyName, v);
    }
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
    case this.sliderKeyName.sourceFund:
      this.sourceFundSliderStyle = bg;
      break;
    case this.sliderKeyName.targetFund:
      this.targetFundSliderStyle = bg;
      break;
    case this.sliderKeyName.period:
      this.periodSliderStyle = bg;
      break;
    case this.sliderKeyName.period:
      this.periodSliderStyle = bg;
    break;
    case this.sliderKeyName.sourceROR:
      this.sourceRORSliderStyle = bg;
    break;
    case this.sliderKeyName.targetROR:
      this.targetRORSliderStyle = bg;
    break;
  }
};

// Get input field min & max limit
getInputLimit = (type: any, isMax: any= false) =>{
  let v ;
  
  const minSourceFund = 1e4;
  const maxSourceFund = 1e8;

  const minTargetFund = 500;
  const maxTargetFund = 1e6;
  
  const minPeriod = 1;
  const maxPeriod = 30;

  const minSourceROR = 2;
  const maxSourceROR = 8;
  
  const minTargetROR = 2;
  const maxTargetROR = 13;

  switch(type){
    
    case this.sliderKeyName.sourceFund:
      v = isMax ? maxSourceFund: minSourceFund;
    break;
    case this.sliderKeyName.targetFund:
      v = isMax ? maxTargetFund: minTargetFund;
    break;
    case this.sliderKeyName.period:
      v = isMax ? maxPeriod: minPeriod;
    break;
    case this.sliderKeyName.sourceROR:
      v = isMax ? maxSourceROR: minSourceROR;
    break;
    case this.sliderKeyName.targetROR:
      v = isMax ? maxTargetROR: minTargetROR;
    break;
  }

  return v;
}

// Get the Graph latest Object
setGraphValues(d: any=[]){
  let labels: any=[];
  let equityData: any = [];
  let liquidData: any = [];

  this.barChartData = {
    labels: labels,
    datasets: [
      { data: equityData, label: 'Equity Funds',backgroundColor:"#3769FF" },
      { data: liquidData, label: 'Liquid Funds',backgroundColor:"#14C9C9" },
    ],
  };

  if(!d){
    return;
  }

  d.forEach((e: any) => {
    labels.push(e.year);
    equityData.push(e.sourceFund);
    liquidData.push(e.destinationFund);
  });

  this.barChartData = {
    labels: labels,
    datasets: [
      { data: equityData, label: 'Equity Funds',backgroundColor:"#3769FF" },
      { data: liquidData, label: 'Liquid Funds',backgroundColor:"#14C9C9" },
    ],
  };
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
    sourceFund,
    targetFund,
    time,
    period,
    sourceROR,
    targetROR,
  } = this.calcForm.value


  // Clear previous calculated Data
  this.calculatedData = {};
  this.setGraphValues();

  if(!sourceFund || !period){
    return;
  }

  
  // -> Handle SIP 
  const finalData = this._calcService.get_stp(
    sourceFund,
    targetFund,
    time,
    period,
    sourceROR,
    targetROR,
  );

  this.calculatedData = finalData;
  this.setGraphValues(finalData.eachYearData);

};

autoFocus(event: any, refId:any){
  $(`#${refId}`).focus();
}
  
}
