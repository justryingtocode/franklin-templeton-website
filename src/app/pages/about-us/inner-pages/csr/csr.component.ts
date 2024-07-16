import { Component } from '@angular/core';

@Component({
  selector: 'app-csr',
  templateUrl: './csr.component.html',
  styleUrls: ['./csr.component.scss']
})
export class CsrComponent {
  slideConfig = {
    infinite: false,
    dots: false,
    arrows: true,
    prevArrow:"<button type='button' class='btn btn-outline-secondary left-arrow'><i class='bi bi-arrow-left-short'></i></button>",
    nextArrow:"<button type='button' class='btn btn-outline-secondary right-arrow'><i class='bi-arrow-right-short'></i></button>",

    slidesToShow:3,
    slidesToScroll: 1,
    swipeToSlide: true, 
    touchThreshold: 100,
    responsive: [
       
        {
            breakpoint: 768,
            
            settings: {
              slidesToShow:2,
                slidesToScroll: 1
            }
        }
        ,
        {
            breakpoint: 576,
            
            settings: {
              slidesToShow:1,
                slidesToScroll: 1
            }
        }
    ]
  };
}
