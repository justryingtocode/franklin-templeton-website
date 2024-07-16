import { Component, OnInit, Renderer2, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FundService } from 'src/app/shared/services/fund.service';
@Component({
  selector: 'app-more-details',
  templateUrl: './more-details.component.html',
  styleUrls: ['./more-details.component.scss']
})
export class MoreDetailsComponent implements OnInit {
  fundManagerName: any;
  showcalender: boolean = false;
  storedEvent1Value: any = 'Growth';
  storedEvent2Value: any = 'Last 30 Days';
  storedEventData: any = 'IDCW';
  isMobileView: boolean = false;
  paginationNumbers: number[] = [10, 20, 30]
  navDataExpanded: boolean = false;
  IDCWHistoryDataExpanded: boolean = false;
  IDCWdefaultDateFrom: any = 'Mar 2023';
  IDCWdefaultDateTo: any = 'April 2023';

  idcwFromDate: any;
  idcwToDate: any;
  errorMsg: any;
  defaultDateTo: any = 'Mar 2023';
  defaultDateFrom: any = 'April 2023';
  defaulshowDateFrom: boolean = false;
  defaulshowDateTo: boolean = false;
  errorMessage: string = '';
  currentPage = 1;
  itemsPerPage = 10;
  totalItems: any;
  totalPages: any;
  historicalNav: any = [
    { date: '12/06/2023', Nav: 25.9112, NavChange: 0.1443 },
    { date: '09/06/2023', Nav: 25.7669, NavChange: 0.1420 },
    { date: '08/06/2023', Nav: 25.6249, NavChange: -0.0029 },
    { date: '07/06/2023', Nav: 25.6278, NavChange: 0.2088 },
    { date: '06/06/2023', Nav: 25.4190, NavChange: -0.0029 },
    { date: '05/06/2023', Nav: 25.4190, NavChange: -0.0029 },
  ];
  IDCWhistoryData = [
    {
      key: "IDCW",
      date1: "23/12/2022",
      value1: 0.3500,
      value2: 12.4816,
      date2: "26/12/2022",
      value3: 12.1510
    },
    {
      key: "Direct-IDCW",
      date1: "23/12/2022",
      value1: 0.6500,
      value2: 13.5063,
      date2: "26/12/2022",
      value3: 12.8781
    },
    {
      key: "IDCW",
      date1: "23/12/2022",
      value1: 0.3500,
      value2: 12.4816,
      date2: "26/12/2022",
      value3: 12.1510
    },
    {
      key: "Direct-IDCW",
      date1: "23/12/2022",
      value1: 0.6500,
      value2: 13.5063,
      date2: "26/12/2022",
      value3: 12.8781
    },
    {
      key: "IDCW",
      date1: "23/12/2022",
      value1: 0.3500,
      value2: 12.4816,
      date2: "26/12/2022",
      value3: 12.1510
    }
  ];
  slideConfig = {
    dots: false,
    arrows: true,
    centerMode: false,
    rtl: false,
    prevArrow: "<button type='button' class='btn btn-outline-secondary left-arrow'><i class='bi bi-arrow-left-short'></i></button>",
    nextArrow: "<button type='button' class='btn btn-outline-secondary right-arrow'><i class='bi-arrow-right-short'></i></button>",
    // autoplay: true,
    infinite: false,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    touchThreshold: 100,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2.2,
          slidesToScroll: 1
        }
      }
      ,
      {
        breakpoint: 600,

        settings: {
          arrows: false,
          slidesToShow: 1.2,
          slidesToScroll: 1
        }
      }
      ,
      {
        breakpoint: 576,

        settings: {
          autoplay: false,
          arrows: false,
          swipeToSlide: false,
          touchThreshold: false,
        }
      }
    ]
  };
  historyDateForm: FormGroup = new FormGroup({});
  funds: any = [];
  fundsManager: any = [];
  scheme: any = [];
  Financial: any = [];
  DailyNAVs: any = [];
  IDCWHistory: any = [];
  toDateError: boolean = false;
  constructor(private cdr: ChangeDetectorRef, private _fb: FormBuilder, private _fundServices: FundService, private renderer: Renderer2) {  this.errorMsg = ''; }
  showNAVTable = false;
  showIDCWTable = false;
  ngOnInit(): void {
    if (window.innerWidth < 700) {
      this.isMobileView = true;
    }
    this.initForm()
    this.getFundsDetail();
    this.getFundsManagerDetail();
    this.getOtherFundsDetail();

    // const browserZoomLevel = Math.round(window.devicePixelRatio * 100) 
    // console.log(browserZoomLevel)
    // if(browserZoomLevel>100) {
    //   this.fixStylingOnZoom();
    // }
    // window?.addEventListener('resize', () => {
    //  this.fixStylingOnZoom();
    // })

  }

  get historicalNavPaginatedData(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.historicalNav.slice(startIndex, endIndex);
  }
  get IDCWPaginatedData(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.IDCWhistoryData.slice(startIndex, endIndex);
  }

  initForm = () => {
    this.historyDateForm = this._fb.group({
      historyDate: ['', Validators.required]
    })
  }
  toggleNAVTable() {
    this.showNAVTable = !this.showNAVTable
  }
  toggleIDCWTable() {
    this.showIDCWTable = !this.showIDCWTable
  }

  getFundsDetail = () => {
    this._fundServices.getFundsDetailData().subscribe({
      next: (result) => {
        this.funds = result
        // console.log(this.funds);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  getFundsManagerDetail = () => {
    this._fundServices.getFundsManagerData().subscribe({
      next: (result) => {
        this.fundsManager = result
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  getOtherFundsDetail = () => {
    this._fundServices.getOtherFundsData().subscribe({
      next: (result: any) => {
        this.scheme = result[0].SchemeDetails;
        this.Financial = result[0].FinancialRatio;
        this.DailyNAVs = result[0].DailyNAVs;
        if (this.isMobileView) {
          this.DailyNAVs.forEach((e: any) => {
            this.DailyNAVs.push({
              label: e.data3,
              value: e.data4
            })
          });
        }

        this.IDCWHistory = result[0].IDCWHistory;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
  viewManagerFunds(param: any) {
    this.fundManagerName = param.name;
  }

  showCalender() {
    this.showcalender = !this.showcalender
  }

  getAccodian1SelectValue(event: any) {
    console.log(event)
    this.storedEvent1Value = event
  }

  getAccodian2SelectValue(event: any) {
    console.log(event)
    this.storedEvent2Value = event
  }

  getAccodianSelectdata(event: any) {
    this.storedEventData = event
  }
  dateSelected(param: any) {
    // console.log(param);
  }
  IDCWmodaldateSelected(date: any, mode: any) {
    console.log(date);
    const me = date?.split(" ");
    let selectedMonth = '';
    let selectedYear = '';
    let toDate = ''
    let fromDate = '';
    if (me) {
      selectedMonth = me[0];
      selectedYear = me[1];
    }
    if (mode === 'to') {
      console.log(mode)
      toDate = date;
      this.idcwToDate = toDate;
      this.idcwFromDate = this.idcwFromDate ? this.idcwFromDate : this.IDCWdefaultDateFrom;
    }
    else if (mode === 'from') {
      fromDate = date;
      this.idcwFromDate = fromDate;
      this.idcwToDate = this.idcwToDate ? this.idcwToDate : this.IDCWdefaultDateTo;
    };
    console.log(this.idcwToDate);
    console.log(this.idcwFromDate)
    if (new Date(this.idcwFromDate) > new Date(this.idcwToDate)) {
      console.log('here');
      this.errorMsg = 'From date cannot be greater than To date'
    }
    else {
      this.errorMsg = ''
    }
  }

  onPageSizeChange(param: any) {
    this.itemsPerPage = param?.target.value;
  }
  historicalNavDataToggle() {
    this.navDataExpanded = true;
  }
  IDCWHistoricalNavDataToggle() {
    this.IDCWHistoryDataExpanded = true;
  }

  // fixStylingOnZoom() {
  //   const browserZoomLevel = Math.round(window.devicePixelRatio * 100);
  //   console.log(browserZoomLevel);
  //   let managerBlocks: any = document.querySelectorAll('.fundManagerFontSize1');
  //   let managerBlocks1: any = document.querySelectorAll('.addFontSize1');
  //   let managerBlocks2: any = document.querySelectorAll('.removeFontSize1');
  // if (browserZoomLevel > 150) {
  //   // Apply styles for zoom greater than 100
  //   console.log('Zoom level is greater than 100');
  //   managerBlocks?.forEach((element: any) => {
  //     this.renderer.setStyle(element, 'font-size', '13px');
  //     this.renderer.setStyle(element, 'color', 'red'); // Add any additional styles as needed
  //   });
  //   managerBlocks1?.forEach((element: any) => {
  //     this.renderer.setStyle(element, 'font-size', '20px');
  //     this.renderer.setStyle(element, 'color', 'red'); // Add any additional styles as needed
  //   });
  //   managerBlocks2?.forEach((element: any) => {
  //     this.renderer.setStyle(element, 'font-size', '11px');
  //     this.renderer.setStyle(element, 'color', 'red'); // Add any additional styles as needed
  //   });
  // } else {
  //   // Apply styles for zoom equal to or less than 100
  //   console.log('Zoom level is less than or equal to 100');
  //   managerBlocks?.forEach((element: any) => {
  //     this.renderer.setStyle(element, 'font-size', '16px');
  //     this.renderer.setStyle(element, 'color', 'blue'); // Add any additional styles as needed
  //   });
  //   managerBlocks1?.forEach((element: any) => {
  //     this.renderer.setStyle(element, 'font-size', '23px');
  //     this.renderer.setStyle(element, 'color', 'blue'); // Add any additional styles as needed
  //   });
  //   managerBlocks2?.forEach((element: any) => {
  //     this.renderer.setStyle(element, 'font-size', '13px');
  //     this.renderer.setStyle(element, 'color', 'blue'); // Add any additional styles as needed
  //   });
  // }

  // }
  dateSelectedFrom(param: any) {
    console.log(param);
    this.defaultDateFrom = param
  }

  dateSelectedTo(param: any) {
    console.log(param)
    this.defaultDateTo = param
  }
  closeModal() {
    this.defaulshowDateFrom = false;
    this.defaulshowDateTo = false;
    this.errorMsg = '';
    setTimeout(() => {
      this.defaulshowDateFrom = true;
      this.defaulshowDateTo = true;
      this.IDCWdefaultDateFrom = 'Mar 2023';
      this.IDCWdefaultDateTo = 'April 2023';
    }, 100);
  }
}
