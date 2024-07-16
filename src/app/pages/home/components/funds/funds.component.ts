import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
import { ComparefundService } from 'src/app/shared/services/compare-fund/comparefund.service';
import { FundService } from 'src/app/shared/services/fund.service';
import { SolutionsService } from 'src/app/shared/services/solutions/solutions.service';

@Component({
  selector: 'app-funds',
  templateUrl: './funds.component.html',
  styleUrls: ['./funds.component.scss'],
})
export class FundsComponent implements OnInit {
  sideFilterOptions: any;
  compareFundData:any = [];

  @ViewChild('slickModal')
  slickModal!: SlickCarouselComponent;

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
  this.initFundSlickCarousel();
  }

  initFundSlickCarousel()
  {
    if (this.slickModal !== undefined) {
      if (window.innerWidth > 768) {
        if (this.slickModal.initialized) {
          this.slickModal.unslick();
        }
      } else if (!this.slickModal.initialized) {
        this.slickModal.initSlick();
      }
    }
  }
  slideConfig: any = {
    dots: false,
    arrows: false,
    autoplay: false,
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 9999,
        settings: 'unslick',
      },
      {
        breakpoint: 768,

        settings: {
          centerMode: true,
          arrows: false,
          slidesToShow: 1,
          centerPadding: '5%',
          slidesToScroll: 1,
        },
      },
    ],
  };
  funds: any[] = [];
  constructor(private _solutionsService: SolutionsService,
    private router: Router,
    private _comparefundService:ComparefundService,
    private _fundServices: FundService
  ) {
    this.onWindowResize();
  }
  

  ngOnInit(): void {
    this.getMockFunds()
    this.getMockFundsFilter();
  }

  trackByFn(index: number, item: any) {
    return index; // or item.id
  }

  routeModuleCompareFund()
  {
    this.router.navigate([`/compare-fund`])
  }

  callHomeCompareFundApi() {
    this._comparefundService.getCompareFundHomeCardData().subscribe((res:any)=>{
     this.compareFundData = res;
    })
   }

   getMockFunds = () => {
    this.funds = []
    this._fundServices.getMockFundsData1().subscribe({
      next: (result: any) => {
        this.funds = result.data;
        setTimeout(() => {
          this.initFundSlickCarousel();
        }, 300);
        console.log(this.funds);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
  showContentOnHover(event: any) {
    document.getElementById(event.target.id)?.click();
  }
  getMockFundsFilter = () => {
    this._solutionsService.getMockSolutionsFilterOptions().subscribe({
      next: (result) => {
        this.sideFilterOptions = result
        // console.log(this.solutionsCardContent);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
