import { Component, OnInit } from '@angular/core';
import { ChartData, ChartEvent, ChartType, registerables } from 'chart.js';
import { Chart } from 'node_modules/chart.js';
Chart.register(...registerables);

Chart.defaults.plugins.tooltip.backgroundColor = 'white';
Chart.defaults.plugins.tooltip.titleColor = '#676e76';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  isMobileView: boolean = false;
  // Doughnut
  public doughnutChartDataMarket: ChartData<'doughnut'> = {
    labels: ['Large Cap(40%)', 'Mid Cap(40%)', 'Small Cap(20%)'],
    datasets: [
      {
        // label: 'My First dataset',
        backgroundColor: ['#165DFF', '#14C9C9', '#0EA0E6'],
        borderColor: 'white',
        data: [300, 200, 170],
        borderWidth: 6,
        hoverBorderWidth: 0,
        borderAlign: 'center'
      }
    ]
  };
  public doughnutChartDataPortfolio: ChartData<'doughnut'> = {
    labels: ['Equity(40%)', 'Fixed Income(40%)', 'Fixed Income(40%)'],
    datasets: [
      {
        // label: 'My First dataset',
        backgroundColor: ['#165DFF', '#14C9C9', '#0EA0E6'],
        borderColor: 'white',
        data: [300, 200, 170],
        borderWidth: 6,
        hoverBorderWidth: 0,
        borderAlign: 'center'
      }
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';

  constructor() { }

  ngOnInit(): void {
    if (window.innerWidth < 700) {
      this.isMobileView = true;
    }
  }
  pieChartOptionsPortfolio: any = {
    responsive: true,
    legend: {
      display: false,
      position: 'top'
    },
    elements: {
      arc: {
        backgroundColor: ['#165DFF', '#14C9C9', '#0EA0E6']
      }
    },
    tooltips: {
      callbacks: {
        label: function (tooltipItem: any, data: any) {
          var label = data.labels[tooltipItem.index];
          return label;
        }
      }
    },
  }
  pieChartOptionsMarket: any = {
    legend: {
      display: false,
      position: 'top'
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function (tooltipItem: any, data: any) {
            var label = tooltipItem.dataset.label;
            return  '';
          },
        }
      }
    },
    elements: {
      arc: {
        backgroundColor: ['#165DFF', '#14C9C9', '#0EA0E6']
      }
    },
  };
}
