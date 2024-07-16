import { Component, OnInit } from '@angular/core';
import { ChartData } from 'chart.js';


@Component({
  selector: 'app-lumpsum-calculator',
  templateUrl: './lumpsum-calculator.component.html',
  styleUrls: ['./lumpsum-calculator.component.scss']
})
export class LumpsumCalculatorComponent implements OnInit {
  formValue: any
  retrievedValue: any
  
  isGraphView: boolean = true;
  readonly sipType: any  = {
    normal: 'normal',
    amount: 'amount',
    year: 'year',
  }

  selectedSipType: any = this.sipType.normal;

  sipData: ChartData<'line'> = {
    labels: [],
    datasets: [],
  };

  // Grap Configuration
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
  
  constructor() { }

  ngOnInit(): void {
  }

  // Set isGraphView
  setIsGraphView(v: any){
    this.isGraphView = v;
  }

  // Get the Graph latest Object
  setGraphValues = (labels: any=[], totalValueData: any=[], investedData: any=[]) =>{
    this.sipData  = {
      labels: labels,
      datasets: [
        {
          label: 'Funds returns : ₹ ',
          data: totalValueData,
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
          data: investedData,
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
    };
  }

  getTotalInvestment = (amount: number) => {
    let result = 0
    
    switch (this.formValue?.time) {
      case 'DAILY':
        result = 365 * this.formValue?.period * amount
        break;
      case 'WEEKLY':
        result = 52.1429 * this.formValue?.period * amount
        break;
      case 'MONTHLY':
        result = 12 * this.formValue?.period * amount
        break;
      case 'QUARTERLY':
        result = 4 * this.formValue?.period * amount
        break;
      default:
        result = 0
        break;
    }
    return result
  }

  getPotentialGains = () => {
    return (this.formValue?.expectedReturn/100) * this.getTotalInvestment(this.formValue?.amount)
  }

  getHaveToInvestAmount = () => {
    let result = 0
    
    switch (this.formValue?.time) {
      case 'DAILY':
        result = this.formValue?.earn / this.formValue?.period / 365
        break;
      case 'WEEKLY':
        result = this.formValue?.earn / this.formValue?.period / 52.1429
        break;
      case 'MONTHLY':
        result = this.formValue?.earn / this.formValue?.period / 12
        break;
      case 'QUARTERLY':
        result = this.formValue?.earn / this.formValue?.period / 4
        break;
      default:
        result = 0
        break;
    }
    return result - (this.formValue?.expectedReturn/100) * result
  }

  toggleIsSIP = (type: any) => {
    this.selectedSipType = type
  }

  showRiskOptions=false;
  showRecomendedFunds=false;
  toggleShowRiskOptions(){
    this.showRiskOptions=!this.showRiskOptions
  }
  toggleShowRecomendedFunds(){
    this.showRecomendedFunds=!this.showRecomendedFunds
  }

  OnRecalculate(data: any){
    let labels: any=[];
    let totalValueData: any=[];
    let investedData: any=[];
    let installmentAmountData: any=[];

    // Clear graph values
    this.setGraphValues([], [], []);

    if(!data || !data.eachYearData){
      return;
    }

    data.eachYearData.forEach((e: any) => {
        labels.push(e.year);
        totalValueData.push(e.expectedAmt);
        investedData.push(e.investedAmt);
    });
    this.setGraphValues(labels, totalValueData, investedData);
  }
}
