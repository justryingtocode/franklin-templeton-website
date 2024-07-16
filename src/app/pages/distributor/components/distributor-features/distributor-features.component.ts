import { Component } from '@angular/core';

@Component({
  selector: 'app-distributor-features',
  templateUrl: './distributor-features.component.html',
  styleUrls: ['./distributor-features.component.scss']
})
export class DistributorFeaturesComponent {
  slideConfig = {
    infinite: false,
    dots: false,
    arrows: false,
    prevArrow:"<button type='button' class='btn btn-outline-secondary left-arrow'><i class='bi bi-arrow-left-short'></i></button>",
    nextArrow:"<button type='button' class='btn btn-outline-secondary right-arrow'><i class='bi-arrow-right-short'></i></button>",

    slidesToShow:4,
    slidesToScroll: 1,
    swipeToSlide: true, 
    touchThreshold: 100,
    responsive: [
        {
            breakpoint: 992,
            settings: {
              slidesToShow:3.2,
                slidesToScroll: 1
            }
        }
        ,
        {
            breakpoint: 768,
            
            settings: {
              slidesToShow:2.2,
                slidesToScroll: 1
            }
        }
        ,
        {
            breakpoint: 576,
            
            settings: {
              slidesToShow:1.2,
                slidesToScroll: 1
            }
        }
    ]
  };
}
