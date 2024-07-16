import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stand-box',
  templateUrl: './stand-box.component.html',
  styleUrls: ['./stand-box.component.scss']
})
export class StandBoxComponent implements OnInit {

  slideConfig = {
    dots: false,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    touchThreshold: 200,
    responsive: [
     
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };
  constructor() {
  }

  ngOnInit(): void {
    
  }
}
