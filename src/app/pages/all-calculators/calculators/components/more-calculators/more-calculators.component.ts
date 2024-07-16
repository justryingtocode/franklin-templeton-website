import { Component,Input,OnInit } from '@angular/core';
import { SolutionsService } from 'src/app/shared/services/solutions/solutions.service';

@Component({
  selector: 'app-more-calculators',
  templateUrl: './more-calculators.component.html',
  styleUrls: ['./more-calculators.component.scss']
})
export class MoreCalculatorsComponent implements OnInit{
  @Input() solutions:any =[];

  solutionsCardContent: any = [];

  slideConfig = {
    dots: false,
    arrows: true,
    prevArrow:"<button type='button' class='btn btn-outline-secondary left-arrow'><i class='bi bi-arrow-left-short'></i></button>",
    nextArrow:"<button type='button' class='btn btn-outline-secondary right-arrow'><i class='bi-arrow-right-short'></i></button>",
    infinite: false,
    slidesToShow:3.5,
    slidesToScroll: 1,
    swipeToSlide: true, 
    touchThreshold: 100,
    responsive: [
       
        {
            breakpoint: 992,
            settings: {
              arrows:false,
              slidesToShow:2.2
            }
        }
        ,
        {
            breakpoint:576,
            
            settings: {
              arrows:false,
              slidesToShow:1.2,
                slidesToScroll: 1
            }
        }
    ]
  };
  constructor(private _solutionsService: SolutionsService) {
  }

 




  ngOnInit(): void {
    this.getMockFunds();
  
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

  
}
