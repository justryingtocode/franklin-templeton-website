import { Component } from '@angular/core';

@Component({
  selector: 'app-distributor-events',
  templateUrl: './distributor-events.component.html',
  styleUrls: ['./distributor-events.component.scss']
})
export class DistributorEventsComponent {
  slideConfig = {
    infinite: false,
    dots: false,
    arrows: true,
    prevArrow:"<button type='button' class='btn btn-outline-secondary left-arrow'><i class='bi bi-arrow-left-short'></i></button>",
    nextArrow:"<button type='button' class='btn btn-outline-secondary right-arrow'><i class='bi-arrow-right-short'></i></button>",

    slidesToShow:4.5,
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
              slidesToShow:1.2,
                slidesToScroll: 1
            }
        }
    ]
  };
}
