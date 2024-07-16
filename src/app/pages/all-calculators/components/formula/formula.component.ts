import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formula',
  templateUrl: './formula.component.html',
  styleUrls: ['./formula.component.scss']
})
export class FormulaComponent implements OnInit{
  slideConfig = {
    dots: false,
    arrows: true,
    prevArrow:"<button type='button' class='btn btn-outline-secondary left-arrow'><i class='bi bi-arrow-left-short'></i></button>",
    nextArrow:"<button type='button' class='btn btn-outline-secondary right-arrow'><i class='bi-arrow-right-short'></i></button>",
    infinite: false,
    slidesToShow:3,
    slidesToScroll: 1,
    swipeToSlide: true, 
    touchThreshold: 100,
    responsive: [
       
        {
            breakpoint: 992,
            settings: {
              slidesToShow:2
            }
        }
        ,
        {
            breakpoint:576,
            
            settings: {
                slidesToScroll: 1
            }
        }
    ]
  };
  constructor() { }

  ngOnInit(): void {
  }
}
