import { Component, OnInit } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-all-funds',
  templateUrl: './all-calculators.component.html',
  styleUrls: ['./all-calculators.component.scss']
})
export class AllCalculatorsComponent implements OnInit {
  retrievedValue: any;
  isSip: boolean = true;
 sipData: ChartData<'line'> = {
    labels: ['2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
    datasets: [
      {
        label: 'Funds returns : ₹ ',
        data: [2.5, 3, 4, 5, 6, 7, 7.5, 9, 10, 11, 14, 15],
        tension: 0.5,
        backgroundColor: 'rgba(22, 93, 255,0.3)',
        borderColor: '#165DFF',
        pointBackgroundColor: '#165DFF',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#165DFF',
        fill: 'origin'
      },
      {
        label: 'Nifty Midcap Returns : ₹ ',
        data: [2.5, 3.5, 4.5, 5.5, 6.5, 7.5, 8.5, 9.5, 10.5, 11.5, 12.5, 15],
        tension: 0.5,
        backgroundColor: 'rgba(32, 188, 201, 0.3)',
        borderColor: 'rgba(32, 188, 201, 1)',
        pointBackgroundColor: 'rgba(32, 188, 201, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(32, 188, 201, 1)',
        fill: 'origin'
      },
      {
        label: 'Nifty Midcap Return : ₹',
        data: [2.5, 3.7, 4.7, 6, 7.5, 8, 9.7, 10.6, 11.4, 12.3, 13.5, 14, 15],
        tension: 0.5,
        backgroundColor: 'rgba(216, 175, 231, 0.3)',
        borderColor: 'rgba(216, 175, 231, 1)',
        pointBackgroundColor: 'rgba(216, 175, 231, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(216, 175, 231, 1)',
        fill: 'origin'
      },
    ],
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
                backgroundColor: '#fff'
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
  toggleIsSIP(param: boolean) {
    this.isSip = param;
  }
  dateSelected(param: any) {
    // console.log(param);
  }
}

