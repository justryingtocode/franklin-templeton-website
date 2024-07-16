import { Component } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';
import { ComparefundService } from 'src/app/shared/services/compare-fund/comparefund.service';

@Component({
  selector: 'app-accordiandetails',
  templateUrl: './accordiandetails.component.html',
  styleUrls: ['./accordiandetails.component.scss']
})
export class AccordiandetailsComponent {

  accodianData:any = [];
  forSchemeSummry:any = [];
  forReturn:any = [];
  forRiskMeasure:any = [];
  forPortfolio:any = [];
  forFunddetail:any = [];
  forOthers:any = [];

  isSchemeSummaryAccordionExpanded = false;
  isPerformanceAccordionExpanded = false;
  isReturnAccodionExpanded =  false;
  isRiskmeasuresAccodionExpanded = false;
  isPortfolioAccodionExpanded = false;
  isFunddetailsAccodionExpanded = false;
  isOthersAccodionExpanded = false;


  salesData: ChartData<'line'> = {
    labels: ['2012', '2013', '2014', '2015', '2016','2017','2018','2019','2020','2021','2022','2023'],
    datasets: [
      { 
        label: 'This fund',
        data: [2.5, 3,4,5,6,7,7.5,9,10,11,14,15], 
        tension: 0.5 ,
        backgroundColor: 'rgba(22, 93, 255,0.3)',
        borderColor: '#165DFF',
        pointBackgroundColor: '#165DFF',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#165DFF',
        fill: 'origin'
      },
      { 
        label: 'Nifty Midcap', 
        
        data: [2.5, 3.5,4.5,5.5,6.5,7.5,8.5,9.5,10.5,11.5,12.5,15], 
        tension: 0.5 ,
        backgroundColor: 'rgba(32, 188, 201, 0.3)',
        borderColor: 'rgba(32, 188, 201, 1)',
        pointBackgroundColor: 'rgba(32, 188, 201, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(32, 188, 201, 1)',
        fill: 'origin'
      },
      { 
        label: 'Nifty Midcap', 
        data:[2.5, 3.7,4.7,6,7.5,8,9.7,10.6,11.4,12.3,13.5,14,15], 
        tension: 0.5 ,
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
  chartOptions: ChartOptions = {
    responsive: true,
    elements: {
      line: {
        tension: 0.5,
      },
    },
    maintainAspectRatio: false,
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
      x:{
        
       grid: {
          color: 'rgba(255,255,255,0)',
        },
        ticks: {
          color: '#8189A2',
          font: {
            size:12
          },
        },
      }
     
    },
    
    plugins: {
      title: {
        display: false,
        text: '',
      },
      legend: {
        display: false
      }
    },
  };

  constructor(private _comparefundService:ComparefundService) {}

  ngOnInit(): void {

    this.getAccodianData()

   }

  togglePerformanceAccordion() {
    this.isPerformanceAccordionExpanded = !this.isPerformanceAccordionExpanded;
  }

  toggleSchemeSummaryAccordion() {
    this.isSchemeSummaryAccordionExpanded = !this.isSchemeSummaryAccordionExpanded;
  }

  toggleReturnAccodian()
  {
    this.isReturnAccodionExpanded = !this.isReturnAccodionExpanded;
  } 

  toggleisRiskmeasuresAccodion()
  {
    this.isRiskmeasuresAccodionExpanded = !this.isRiskmeasuresAccodionExpanded;  
  } 

  togglePortfolioAccodion()
  {
    this.isPortfolioAccodionExpanded = !this.isPortfolioAccodionExpanded;
  }

  toggleFunddetailsAccodion()
  {
    this.isFunddetailsAccodionExpanded = !this.isFunddetailsAccodionExpanded;
  }

  toggleOthersAccodion()
  {
    this.isOthersAccodionExpanded = !this.isOthersAccodionExpanded;
  }

  getAccodianData = () => {
    this._comparefundService.getCompareFundAccordianData().subscribe({
      next: (result:any) => {
        this.accodianData = result;
        this.forSchemeSummry = this.accodianData.SCHEME;
        this.forReturn = this.accodianData.RETURN;
        this.forRiskMeasure = this.accodianData.RISKMEASURE;
        this.forPortfolio = this.accodianData.PORTFOLIO;
        this.forFunddetail = this.accodianData.FUNDDETAIL;
        this.forOthers = this.accodianData.OTHERS;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
  
}
