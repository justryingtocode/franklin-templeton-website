import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';

@Component({
  selector: 'app-digitize-wealth',
  templateUrl: './digitize-wealth.component.html',
  styleUrls: ['./digitize-wealth.component.scss']
})

export class DigitizeWealthComponent implements OnInit {
  @ViewChild('slickModal')
  slickModal!: SlickCarouselComponent;
  @HostListener('window:resize', ['$event'])
  onWindowResize($event: any) {
    if (this.slickModal !== undefined) {
      if (window.innerWidth < 768) {
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
    infinite: false,
    arrows: true,
    prevArrow:"<button type='button' class='btn btn-outline-secondary left-arrow'><i class='bi bi-arrow-left-short'></i></button>",
    nextArrow:"<button type='button' class='btn btn-outline-secondary right-arrow'><i class='bi-arrow-right-short'></i></button>",
    
    centerMode: false,
    centerPadding: '75px',
    slidesToShow:5,
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
              arrows: false,
              slidesToShow:2,
                centerPadding: '5%',
                slidesToScroll: 1
            }
        }
        ,
        {
            breakpoint:768,
            settings: "unslick",
        }
    ]
  };
  constructor() { }

  ngOnInit(): void {
  }

}