import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { SolutionsService } from 'src/app/shared/services/solutions/solutions.service';

export interface cardOptions {
  id: number;
  imageUrl: string;
  title: string;
};
@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.scss']
})


export class SolutionsComponent implements OnInit {
  solutionsCardContent: any = [];
  slideConfig = {
    dots: false,
    infinite: false,
    arrows: true,
    prevArrow: "<button type='button' class='btn btn-outline-secondary left-arrow'><i class='bi bi-arrow-left-short'></i></button>",
    nextArrow: "<button type='button' class='btn btn-outline-secondary right-arrow'><i class='bi-arrow-right-short'></i></button>",
    centerMode: false,
    centerPadding: '15%',
    slidesToShow: 6,
    slidesToScroll: 1,
    swipeToSlide: true,
    touchThreshold: 200,
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
          slidesToShow: 3,
          centerPadding: '5%',
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 3,
          centerPadding: '5%',
          slidesToScroll: 2
        }
      }
    ]
  };
  constructor(private _solutionsService: SolutionsService, private router: Router) {
  }
  

  ngOnInit(): void {
    this.getMockFunds();
    this.router.events.subscribe((event) => {
      if (!(event instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
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
  contentData(param: cardOptions) {
    // this.router.navigate(['/solutions/content/' + param.id], { queryParams: { ...param } });
    this.router.navigateByUrl('/solutions/content/' + param.id, { state: { ...param } });
  }
}
