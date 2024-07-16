import { Component, ElementRef, Inject, OnInit, Renderer2, ViewChild } from '@angular/core';
import { SolutionsService } from 'src/app/shared/services/solutions/solutions.service';
import { NavigationEnd, Router } from '@angular/router';

export interface cardOptions {
  id: number;
  imageUrl: string;
  title: string;
};
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})

export class ServicesComponent implements OnInit {
  solutionsCardContent: any = [];
  slideConfig = {
    infinite: false,
    dots: false,
    arrows: true,
    prevArrow: "<button type='button' class='btn btn-outline-secondary left-arrow'><i class='bi bi-arrow-left-short'></i></button>",
    nextArrow: "<button type='button' class='btn btn-outline-secondary right-arrow'><i class='bi-arrow-right-short'></i></button>",

    centerMode: false,
    centerPadding: '15%',
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    touchThreshold: 100,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          centerPadding: '10%',
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          centerPadding: '5%',
          slidesToScroll: 1
        }
      }
      ,
      {
        breakpoint: 768,

        settings: {
          arrows: false,
          slidesToShow: 1,
          centerPadding: '5%',
          slidesToScroll: 1
        }
      }
    ]
  };
  constructor(private _solutionsService: SolutionsService, private renderer: Renderer2, private router: Router) { }

  ngOnInit(): void {
    this.getMockFunds();
    const browserZoomLevel = Math.round(window.devicePixelRatio * 100) 
    if(browserZoomLevel>100) {
      this.fixStylingOnZoom();
    }
    window?.addEventListener('resize', () => {
     this.fixStylingOnZoom();
    })
  }
  getMockFunds = () => {
    this._solutionsService.getMockSolutionsCardData().subscribe({
      next: (result) => {
        this.solutionsCardContent = result
        // console.log(this.solutionsCardContent);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  fixStylingOnZoom() {
    const browserZoomLevel = Math.round(window.devicePixelRatio * 100);
    let menu: any = document.querySelectorAll('.solution-box .btn');
    let header: any = document.getElementById('mainHeader');
    let solutionbox = document.querySelectorAll('.solution-box');
    let heading = document.querySelectorAll('.solution-box .h3');
    if (browserZoomLevel > 100) {
      menu?.forEach((element: any, index: number) => {
        element?.classList.add("goal-btn-zoom-fixes");
        solutionbox[index]?.classList.add("solution-box-min-height");
      });
    }
    else {
      menu?.forEach((element: any, index1: number) => {
        element?.classList.remove("goal-btn-zoom-fixes");
        solutionbox[index1]?.classList.remove("solution-box-min-height");
      });
    }
  }

  contentData(param: cardOptions) {
    // this.router.navigate(['/solutions/content/' + param.id], { queryParams: { ...param } });
    this.router.navigateByUrl('/solutions/content/' + param.id, { state: { ...param } });
  }


}
