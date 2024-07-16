import { Component } from '@angular/core';

@Component({
  selector: 'app-who-we',
  templateUrl: './who-we.component.html',
  styleUrls: ['./who-we.component.scss']
})
export class WhoWeComponent {
  slideConfig = {
    infinite: false,
    dots: false,
    arrows: true,
    prevArrow:"<button type='button' class='btn btn-outline-secondary left-arrow'><i class='bi bi-arrow-left-short'></i></button>",
    nextArrow:"<button type='button' class='btn btn-outline-secondary right-arrow'><i class='bi-arrow-right-short'></i></button>",

    slidesToShow:3.8,
    slidesToScroll: 1,
    swipeToSlide: true, 
    touchThreshold: 100,
    responsive: [
        {
            breakpoint: 992,
            settings: {
              arrows: false,
              slidesToShow:3.2,
                slidesToScroll: 1
            }
        }
        ,
        {
            breakpoint: 768,
            
            settings: {
              arrows: false,
              slidesToShow:2.2,
                slidesToScroll: 1
            }
        }
        ,
        {
            breakpoint: 576,
            
            settings: {
              arrows: false,
              slidesToShow:1.1,
                slidesToScroll: 1
            }
        }
    ]
  };
}
