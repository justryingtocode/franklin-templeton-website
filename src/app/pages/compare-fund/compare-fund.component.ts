import { Component, HostListener, OnInit, ViewChild, EventEmitter, Input, Output, SimpleChanges, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { ComparefundService } from 'src/app/shared/services/compare-fund/comparefund.service';

import { FundService } from 'src/app/shared/services/fund.service';
import { SolutionsService } from 'src/app/shared/services/solutions/solutions.service';
import { CommonService } from 'src/app/shared/services/common.service';

export interface cardData {
  id: number;
  cardTitle: string;
  existingInvestors: string;
  aum: string;
  returns: string;
  annualisedReturns: string
};
declare var bootstrap: any;

@Component({
  selector: 'app-compare-fund',
  templateUrl: './compare-fund.component.html',
  styleUrls: ['./compare-fund.component.scss']
})
export class CompareFundComponent {
  @Input() fund: any;
  @Output() toggleDataCard: EventEmitter<boolean> = new EventEmitter<boolean>();
  // isOpen: boolean = false;
  // addFundCard: boolean = false;
  // toggleAddFundCard: boolean = true;
  // compareFundCardData : Array<cardData> = []

  getFundsIndex:any;
  showAddFundsCard = false;
  
  compareFunds=[
    {
      fundDetails: {
        name: "Franklin India Dynamic Asset Allocation Fund of Funds",
        riskLevelIcon:"",

      },
      Highlights: "A liquid fund that invests in short term and money market instruments. 1",
      FundSize: "AUM of ₹650.87 crores as of 30/09/2023 1",
      AnnualisedReturns:{
        y1:"3 Years",
        y2:"5 Years",
        y3:"10 Years"
      },
      level:"Very high",
      data:"Long term capital gains (LTCG) tax @20% (plus surcharge, if applicable and cess) with indexation if units held for more than 36 months 1",
      data2:"In case of an investor being NRI, LTCG tax are chargeable @ 10% (plus surcharge, if applicable and cess) without indexation relating to units redeemed from unlisted schemes. 1",
      openEndIncome:{
        e1:"Call, Cash and Other Current",
        e2:"PSU/PFI Bonds",
        e3:"Money market instruments"
      },

      equity:"Large Cap, Equity",
      age:"10 yrs 5 m",
      investor:"1.68 Lakhs",
      sectors:"Financial (30.21%) 1",
      holding:"HDFC Bank Ltd. (8.52%) 1",
      Structure:"Entry Load Exit Load 2",
      investment:"Minimum Investment/Multiples for Fresh Purchase(INR)Retail - 5000/1",
      investment2:"Additional Investment/Multiples for Fresh Purchase(INR)Retail - 5000/1 1",
      ratio:{
        r1:"Expense ratio - 0.21%",
        r2:"Expense ratio - 1.71%",
        r3:"Portfolio turnover ratio Includes service tax on investment management fee 1"
      },
      Suitable:"Regular Income, Parking of short term funds 1",
      date:"Record Date 1",
      unit:"Div/Unit 1",
      nav:"Record NAV 1",
      planName:"plan 1",
      
  
     

      recentDividends:{
        plan: "IDCW",
        recordDate:"27/03/2023",
        divUnit:0.1200,
        recordNave: 10.3586
      },

    
    },
    {
      fundDetails: {
        name: "Franklin India Dynamic Asset Allocation Fund of Funds 2",
        riskLevelIcon:"",

      },
      Highlights: "A liquid fund that invests in short term and money market instruments. 2",
      FundSize: "AUM of ₹650.87 crores as of 30/09/2023 2",
      AnnualisedReturns:{
        y1:"3 Years 2",
        y2:"5 Years 2",
        y3:"10 Years 2"
      },
      level:"Very high 2",
      data:"Long term capital gains (LTCG) tax @20% (plus surcharge, if applicable and cess) with indexation if units held for more than 36 months 2",
      data2:"In case of an investor being NRI, LTCG tax are chargeable @ 10% (plus surcharge, if applicable and cess) without indexation relating to units redeemed from unlisted schemes.2",
      openEndIncome:{
        e1:"Call, Cash and Other Current 2",
        e2:"PSU/PFI Bonds 2",
        e3:"Money market instruments 2"
      },

      recentDividends:{
        plan: "IDCW",
        recordDate:"3/03/2024",
        divUnit:0.1200 -2,
        recordNave: 10.3586 -2
      },
      date:"Record Date 2",
      unit:"Div/Unit 2",
      nav:"Record NAV 2",
      planName:"plan 2",
      
      equity:"Mid Cap, Equity",
      age:"8 yrs 5 m",
      investor:"1.68 Lakhs 2",
      sectors:"Financial (30.21%)",
      holding:"HDFC Bank Ltd. (8.52%)",
      Structure:"Entry Load Exit Load 2",
      investment:"Minimum Investment/Multiples for Fresh Purchase(INR)Retail - 5000/1 2",
      investment2:"Additional Investment/Multiples for Fresh Purchase(INR)Retail - 5000/1 2",
      ratio:{
        r1:"Expense ratio - 0.21% 2",
        r2:"Expense ratio - 1.71% 2",
        r3:"Portfolio turnover ratio Includes service tax on investment management fee 2"
      },
      Suitable:"Retirement Corpus, Long Term Wealth Creation, Education Corpus 2"
      
    },
    {
      fundDetails: {
        name: "Franklin India Dynamic Asset Allocation Fund of Funds 2",
        riskLevelIcon:"",

      },
      Highlights: "A liquid fund that invests in short term and money market instruments. 3",
      FundSize: "AUM of ₹650.87 crores as of 30/09/2023 3",

    }
    
    
  ];

  fundData = [
    { name: 'Franklin Build India Fund', riskLevel: 'very-high' , showAddFundsCard:true },
    // { name: 'Franklin Build India Fund', riskLevel: 'very-high' , showAddFundsCard:true },
    // { name: 'Franklin Build India Fund', riskLevel: 'very-high' , showAddFundsCard:true },
  ];

  dataCardToggle: boolean = true
  toggleCpmaredCard:boolean = true
  comapreCard1:boolean = true;
  comapreCard2:boolean = false;
  addComparedCardToggle: boolean = true
  forNewSelectClick:boolean = false;

  compareFundCardData:any[] = [
    { toggleAddMutualCard: false },
    { toggleAddMutualCard: false },
    { toggleAddMutualCard: false },
  ]
  maxCards = 3; // Maximum number of displayed cards
  selectedCardIndex : any; // Index of the card to replace
  compareToggleChangedCard:any;
  receivedData: any[] = [];

  funds: any = [] // please maintain model don't use any 
  fullFundsArray: any = [];

  sideFilterOptions: any;
  getMutualCard: any;
  getCheckboxData: any;
  selectedOptions: string[] = [];
  searchTerm: string = '';

  forGetCompareCard:any;
  forComparedCardData:any = []
  
  selectedFund: any = null;
  filteredFunds: any = [];
  makeModalData = false;
  deltaYr:number = 0;
  deltaYt: number = 0;
  activeTab = 0;
  

  constructor(
    private router: Router,
    private _comparefundService:ComparefundService,
    private _fundServices: FundService,
    private _solutionsService: SolutionsService,
    private commonService: CommonService,
    private renderer: Renderer2
  ) {
    
      //  // Initialize with three "Add Fund" cards by default
      //  for (let i = 0; i < this.maxCards; i++) {
      //   this.compareFundCardData.push({ toggleAddMutualCard: false });
      // }
  }


  ngOnInit(): void {
    this.commonService.getCompareCardData().subscribe(data => {
      this.forGetCompareCard = {...data};
      console.log('comp',this.forGetCompareCard);
      this.fundData[this.getFundsIndex].showAddFundsCard = false;
      this.fundData[this.getFundsIndex].name = this.forGetCompareCard.title
    });
    
    // this.callCompareFundApi()
    // Initialize Offcanvas
    this.getMockFunds();
    this.getMockFundsFilter();

    setTimeout(() => {
      console.log('1')
      const data = sessionStorage.getItem('getAddDataCard') as string;
      if(data !== null){
        const data2 = JSON.parse(data);
        this.funds.push(data2)
        console.log('11',this.funds) 
      }
      else{
        console.log('14')
      }
    }, 500);

    const offcanvas = new bootstrap.Offcanvas(document.getElementById('offcanvasBottom'), {
      backdrop: 'static', // Prevent clicking outside from closing
      keyboard: false // Prevent closing with the keyboard ESC key
    });

   }

   addCompareFund(fundData:any = {}){
    let data ={
      fundDetails: {
        name: "Franklin India Dynamic Asset Allocation Fund of Funds",
        riskLevelIcon:"",

      },
      Highlights: "A liquid fund that invests in short term and money market instruments. 1",
      FundSize: "AUM of ₹650.87 crores as of 30/09/2023",
    }
    this.compareFunds.push(data);
   }

   @HostListener('click', ['$event'])
   getTableDataPage(event: Event) {
 
    //  console.log((event.target as Element).className)
 
     if((event.target as Element).className === 'form-control search ng-untouched ng-pristine ng-valid' || (event.target as Element).className === 'form-control search ng-valid ng-dirty ng-touched' || (event.target as Element).className === 'form-control search ng-pristine ng-valid ng-touched' )
     {
      //  console.log('a')
       this.forNewSelectClick = true

     }
     else{
      //  console.log('b')
       this.forNewSelectClick = false
     }
     
 
   }
   

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

  getMockFundsFilter = () => {
    this._solutionsService.getMockSolutionsFilterOptions().subscribe({
      next: (result) => {
        this.sideFilterOptions = result
        console.log(this.sideFilterOptions);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  // openAddFundCard() {
  //   this.isOpen = true;
  // }

  // closeCard() {
  //   this.isOpen = false;
  // }

  // toggleAddFundDetailCard(){
  //   this.addFundCard = !this.addFundCard
  //   this.addFundDetailCard = !this.addFundDetailCard
  // }

  // callCompareFundApi = () => {
  //   this._comparefundService.getCompareFundCardData().subscribe({
  //     next: (result:any) => {
  //       this.compareFundCardData = result;
  //       this.compareFundCardData.forEach((data:any)=>{
  //         data.toggleAddMutualCard = true;
  //       })
  //       console.log(this.compareFundCardData);
  //     },
  //     error: (err) => {
  //       console.log(err);
  //     }
  //   })
  // }

  removeIdAddFund = (id:number) => {
    console.log(id)
    const cardItem = this.compareFundCardData.find((e: { id: number; }) => e.id === id);
    cardItem.toggleAddMutualCard = false
    console.log(cardItem)
    const index= this.compareFundCardData.findIndex((v:any) => v.id ===id);
    console.log(index)
    // if (index !== -1) {
    //     this.compareFundCardData.splice(index, 1)[0];
    // }  
    // console.log(this.compareFundCardData)
    // this.addFundDetailCard = !this.addFundDetailCard
  }

  // removeIdAddFund(index:number)
  // {
  //   this.compareFundCardData.splice(index, 1);
  // }

  showDivForAddTocart()
  {
    console.log('hi')
  }

  addToggle()
  {
    this.comapreCard1 = false;
    this.comapreCard2 = true;
  }

  backToggle()
  {
    this.comapreCard1 = true;
    this.comapreCard2 = false;
  }

  onCompareToggleChangedCard(compareToggleChangedCard:any)
  {
    if (this.selectedCardIndex < this.compareFundCardData.length) {
      this.compareFundCardData[this.selectedCardIndex].toggleAddMutualCard = true;
    }
    // if (this.selectedCardIndex >= 0 && this.selectedCardIndex < this.receivedData.length) {
      this.receivedData[this.selectedCardIndex] = compareToggleChangedCard;
      console.log(this.receivedData);
    // }
    // console.log('value',this.compareFundCardData)
    // this.receivedData[this.selectedCardIndex] = compareToggleChangedCard;
    // this.compareFundCardData[this.selectedCardIndex] = compareToggleChangedCard;
    // this.compareFundCardData.forEach((data:any)=>{
    //   data.toggleAddMutualCard = true;
    // })
    // if (this.selectedCardIndex !== -1) {
    //   this.compareFundCardData[this.selectedCardIndex] = compareToggleChangedCard;
    //   this.selectedCardIndex = -1; // Reset the selected card index
    // }
    // console.log(this.receivedData);
    // if (index < this.compareFundCardData.length) {
    //   this.compareFundCardData[this.selectedCardIndex] = this.compareFundCardData;
    // // }
    // console.log(this.compareFundCardData);
  
  } 

  // addFund(data: any) {
  //   // Check if the maximum number of cards is reached
  //   if (this.compareFundCardData.length < this.maxCards) {
  //     // Add a new card with toggleAddMutualCard set to true
  //     this.compareFundCardData.push({ toggleAddMutualCard: true, ...data });
  //   } else if (this.selectedCardIndex !== -1) {
  //     // Replace the selected card with the new data
  //     this.compareFundCardData[this.selectedCardIndex] = { toggleAddMutualCard: true, ...data };
  //   }

  //   // Reset the selectedCardIndex
  //   this.selectedCardIndex = -1;
  // }

  selectCardForReplacement(index: number) {
    console.log(index)
    this.selectedCardIndex = index
    // if (index < this.compareFundCardData.length) {
    //   this.compareFundCardData[index].toggleAddMutualCard = true;
    // }
  }

  selectCardForReplacement2(index: number) {
    console.log(index)
    if (index < this.compareFundCardData.length) {
      this.compareFundCardData[index].toggleAddMutualCard = false;
    }
  }

  makeCartToggleMob(index: number=1)
  {
    this.getFundsIndex = index
    console.log(this.getFundsIndex)
    this.dataCardToggle = false
    this.toggleDataCard.emit(this.dataCardToggle);
    const getToggle : boolean = true
    sessionStorage.setItem('getToggle',JSON.stringify(getToggle))

    this.addComparedCardToggle = false

    this.fundData[index].showAddFundsCard = false;
    this.addCompareFund(this.fundData[index]);
  }
  makeCartToggleWeb(index: number=1){
    this.getFundsIndex = index
    console.log(this.getFundsIndex)
    const getToggle : boolean = false
    sessionStorage.setItem('getToggle',JSON.stringify(getToggle))
    this.addCompareFund(this.fundData[index]);
    this.fundData[index].showAddFundsCard = false;
    // this.fundData[this.getFundsIndex].name = titie
  }
  goToCart(data:any)
  {
    this.funds.push(data);
    console.log('Received data:', this.funds);
    // console.log('fund',fund)
    // this.fund.emit(fund);
    // document.getElementById('forRoute')?.click();
  
  }

  forToggleApply()
  {
    this.toggleCpmaredCard = !this.toggleCpmaredCard;
  }

  onFundAdded(fund: any) {
    // this.fund = fund; // Capture the emitted fund value
    console.log(fund)
  }

  cancellFunds(index: number) {

    if (index < this.compareFunds.length) {
      this.compareFunds.splice(index, 1);
  }

  // Check length and redirect to another page if count is 0
  if (this.compareFunds.length === 0) {
      this.router.navigate(['/']);
  }
    
  }

  moveToDataCompareCard()
  {
    this.addComparedCardToggle = true
  }

  makeDataCompareCrad(data:any)
  {
    // console.log(data.fund)
    const dataCard = data;
    console.log(dataCard)
    this.addComparedCardToggle = data
    console.log(this.getFundsIndex)
    // this.fundData[this.getFundsIndex].name = dataCard.title
    // console.log( this.fundData[this.getFundsIndex].name)
  }

  forToComparedCrad(data:any)
  {
     if(data == true)
     {
      console.log('1',data)
      console.log(this.forGetCompareCard)
      this.forComparedCardData = [...this.forComparedCardData, { ...this.forGetCompareCard }];
      console.log(this.forComparedCardData)
      for (let i = 0; i < this.forComparedCardData.length; i++) {
        if (i < this.fundData.length) {
          this.fundData[i].showAddFundsCard = false;
          this.fundData[i].name = this.forComparedCardData[i].title;
        }
      }
       this.toggleCpmaredCard = data
     }
  }
   


}
