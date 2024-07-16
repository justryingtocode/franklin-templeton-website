import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ChartData, ChartOptions } from 'chart.js';
import { SolutionsService } from 'src/app/shared/services/solutions/solutions.service';
import { FundService } from 'src/app/shared/services/fund.service';
export interface stepper {
  id: number,
  hasTraversed: boolean
}
@Component({
  selector: 'app-stepper-s2-goal-planner',
  templateUrl: './stepper-s2-goal-planner.component.html',
  styleUrls: ['./stepper-s2-goal-planner.component.scss']
})
export class StepperS2GoalPlannerComponent implements OnInit {
  @Output() backToStepper: EventEmitter<any> = new EventEmitter();
  areFundsAdded: boolean = false;
  buildMyPlanApplied: boolean = false;
  allFunds: Array<number> = [];
  allFundsnew: Array<number> = [];
  selectedFundsSum: number = 0;
  solutionsCardContent: any = [];
  addedFundsData: any = [];
  stepperStates: any = [];
  changeStyling: boolean = false;
  editPaymentOptionsIsEnabled: boolean = false;
  validateTenureAddition: boolean = false;
  isTenureEditsubmitted: boolean = false;
  checkdata = [
    {
      "id": 1,
      "title": "Monthly",
      "buttonText": "Monthly",
      "isshow": false
    },
    {
      "id": 2,
      "title": "Annually",
      "buttonText": "Annually",
      "isshow": false
    },
    {
      "id": 3,
      "title": "One time",
      "buttonText": "One-time",
      "isshow": false
    },
    {
      "id": 4,
      "title": "Step up",
      "buttonText": "Step-up",
      "isshow": false
    },
  ]
  salesData: ChartData<'line'> = {
    labels: ['2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030'],
    datasets: [
      {
        label: 'This fund',
        data: [0, 5, 10, 15, 16, 22, 29, 38, 50],
        tension: 0.5,
        backgroundColor: 'rgba(32, 188, 201, 0.4)',
        borderColor: '#00847d',
        pointBackgroundColor: '#165DFF',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#165DFF',
        fill: 'origin'
      },
      {
        label: 'Nifty Midcap',
        data: [50, 50, 50, 50, 50, 50, 50, 50, 50],
        tension: 0.5,
        // backgroundColor: 'rgba(166, 105, 202, 0.2)',
        backgroundColor: '#e5e6eb',
        borderColor: '#a669ca',
        pointBackgroundColor: '#a669ca',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(32, 188, 201, 1)',
        fill: 'origin'
      },
    ],
  };
  chartOptions: ChartOptions = {
    maintainAspectRatio: false,
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
          callback: function (value, index, ticks) {
            return value + 'L';
          },
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
      title: {
        display: false,
        text: '',
      },
      legend: {
        display: false
      }
    },
  };


   //  search bar 
   fundsForSearch: any = [];
   fullFundsArray: any = [];
   searchTerm: string = '';
  //  funds: any = [];
   getMutualCard: any;
   selectedFund: any = null;


  toggleShowCopyDialoge() {

  }
  toggleShowSavDialoge() {

  }

  @HostListener('click', ['$event'])
  getTableDataPage(event: Event) {

    console.log((event.target as Element).className)
    if ((event.target as Element).className === 'form-control search ng-untouched ng-pristine ng-valid' || (event.target as Element).className === 'form-control search ng-valid ng-dirty ng-touched' || (event.target as Element).className === 'form-control search ng-valid ng-touched ng-dirty') {
      console.log('1')
      this.fundsForSearch = this.fullFundsArray
    }
    else {
      console.log('2')
      this.fundsForSearch = []
    }

  }

  




  funds: any = [];
  constructor(
    private _solutionsService: SolutionsService, 
    private router: Router,
    private _fundServices: FundService) {
    window.scrollTo(0, 0);
  }
  ngOnInit(): void {
    this.allFunds = Array(2).fill(1).map((x, i) => i);
    this.stepperStates = sessionStorage.getItem('stepperState');
    this.getMockFunds();
  }
  getCardData = () => {
    this._solutionsService.getgoalPlannerCardData().subscribe({
      next: (result) => {
        this.solutionsCardContent = result;
        this.solutionsCardContent.forEach((element: any) => {
          element.isAdded = false;
        });
        // console.log(this.solutionsCardContent);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
  addFunds(itemDetail: any) {
    const selectedItem = this.solutionsCardContent.find((e: { id: number; }) => e.id === itemDetail.id);
    selectedItem.isAdded = true;
    if (this.addedFundsData?.length === 0) {
      this.allFundsnew[0] = 100.00;
      this.selectedFundsSum = 100.00;
      selectedItem.fundAllocation = this.allFundsnew[itemDetail.id - 1];
    }
    else {
      this.allFundsnew[this.addedFundsData?.length] = parseFloat(Number(100 / Number(this.addedFundsData?.length + 1)).toFixed(2));
      let me = this.addedFundsData.length;
      while (me > 0) {
        this.allFundsnew[me - 1] = parseFloat((Number(100 / Number(this.addedFundsData?.length + 1))).toFixed(2));
        this.addedFundsData[me - 1].fundAllocation = this.allFundsnew[me - 1];
        me--;
      }
      selectedItem.fundAllocation = this.allFundsnew[itemDetail.id - 1];
      this.calculateSum(this.allFundsnew);
    }
    this.addedFundsData.push(selectedItem);
    console.log(this.addedFundsData)
  }
  removeFunds(itemDetail: any) {
    const selectedItem = this.solutionsCardContent.find((e: { id: number; }) => e.id === itemDetail.id);
    selectedItem.isAdded = false;
    this.addedFundsData.splice(this.addedFundsData.findIndex((a: any) => a.id === itemDetail.id), 1);
    if (this.addedFundsData.length === 0) this.buildMyPlanApplied = false;
  }
  addFundsPercentageChange(event: Event) {
    this.selectedFundsSum = 0;
    this.calculateSum(this.allFundsnew);
  }
  calculateSum(param: Array<number>) {
    let add = 0;
    this.allFundsnew.forEach(e => {
      add = add + Number(e);
    });
    setTimeout(() => {
      this.selectedFundsSum = add;
    }, 200);
  }
  changeActiveStepper(id: number, direction: boolean) {
    this.stepperStates = sessionStorage.getItem('stepperState');
    const stepperstate = JSON.parse(this.stepperStates);
    if (direction) {
      const selectedItem: any = stepperstate.find((e: { id: number; hasTraversed: boolean; }) => e.id === id);
      selectedItem.hasTraversed = true;
      sessionStorage.setItem('stepperState', JSON.stringify(stepperstate));
    }
    else {
      const selectedItem = stepperstate.find((e: { id: number }) => e.id === id);
      selectedItem.hasTraversed = false;
      sessionStorage.setItem('stepperState', JSON.stringify(stepperstate));
    }
    this.backToStepper.emit(this.addedFundsData);
    // addedFundsData
  }
  changeit(item: any) {
    const selectedItem: any = this.checkdata.find((e: { id: number; }) => e.id === item.id);
    selectedItem.isshow = !selectedItem.isshow;
  }
  tenureSelection(event: Event) {
    this.checkdata.forEach(element => {
      if (element.isshow) {
        this.validateTenureAddition = true;
        console.log("herer")
        this.isTenureEditsubmitted = true;
        this.editPaymentOptionsIsEnabled = false;
      }
    });
  }
  changeboolean() {
    this.editPaymentOptionsIsEnabled = true;
    this.isTenureEditsubmitted = false; 
  }
  // getMockFunds = () => {
  //   this.funds = []
  //   this._fundServices.getMockFundsData().subscribe({
  //     next: (result: any) => {
  //       if(result){
  //         this.funds =  result.slice(0,5);  // as of now showing 5 fund
  //       }
  //       console.log(this.funds);
  //     },
  //     error: (err) => {
  //       console.log(err);
  //     }
  //   })
  // }


  //  search bar

  getMockFunds = () => {
    this.funds = []
    this._fundServices.getMockFundsData().subscribe({
      next: (result) => {
        this.funds = result;
        this.fullFundsArray = result;
        console.log(this.funds);
        this.getMutualCard = this.funds.filter((item: any) => item).length;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
 

  filterFunds(searchTerm: string) {
    if (searchTerm) {
      this.fundsForSearch = this.funds
      // console.log(this.fundsForSearch)
      this.fundsForSearch = this.fundsForSearch.filter((fund: any) =>
        fund.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else {
      this.fundsForSearch = this.fullFundsArray; // Clear the filtered results when input is empty
    }
  
  }

  getTableTitle(fund: any) {
    this.selectedFund = fund; // Update the selected fund variable
    this.searchTerm = this.selectedFund.title;
    const fundsArray = [...this.fullFundsArray]; 
    const selectedFund = fundsArray.find(fund => fund.id === this.selectedFund.id);
    this.funds = [selectedFund]
  }

  resetFundExplore()
  {
    this.funds = this.fullFundsArray;
    this.searchTerm = '';
  }
}
