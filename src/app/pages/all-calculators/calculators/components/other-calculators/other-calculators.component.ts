import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-other-calculators',
  templateUrl: './other-calculators.component.html',
  styleUrls: ['./other-calculators.component.scss']
})
export class OtherCalculatorsComponent implements OnInit{

  @Input() calculators:any =[];
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
              slidesToShow:1.4,
                slidesToScroll: 1
            }
        }
    ]
  };
  constructor() { }

  ngOnInit(): void {
  }
}
