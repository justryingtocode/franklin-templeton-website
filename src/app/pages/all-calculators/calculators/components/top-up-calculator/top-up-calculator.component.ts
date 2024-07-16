import { Component, OnInit } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-top-up-calculator',
  templateUrl: './top-up-calculator.component.html',
  styleUrls: ['./top-up-calculator.component.scss']
})
export class TopUpCalculatorComponent implements OnInit {
  formValue: any
  isSIP = true
  isTargeted = false
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
  constructor() { }

  ngOnInit(): void {
  }

  // Set isGraphView
  setIsGraphView(v: any){
    this.isGraphView = v;
  }

  showRiskOptions=false;
  showRecomendedFunds=false;
  toggleShowRiskOptions(){
    this.showRiskOptions=!this.showRiskOptions
  }
  toggleShowRecomendedFunds(){
    this.showRecomendedFunds=!this.showRecomendedFunds
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

  // On Calculator params change
  OnRecalculate(data: any){
    let labels: any=[];
    let totalValueData: any=[];
    let investedData: any=[];

    // Clear graph values
    this.setGraphValues([], [], []);

    if(!data || !data.eachYearData){
      return;
    }

    data.eachYearData.forEach((e: any) => {
        labels.push(e.year);
        totalValueData.push(e.topupInvestedAmt);
        investedData.push(e.topupResultantAmt);
    });
    this.setGraphValues(labels, totalValueData, investedData);
  }

}
