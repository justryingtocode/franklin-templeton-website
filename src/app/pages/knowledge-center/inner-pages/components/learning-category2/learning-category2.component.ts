import { Component } from '@angular/core';

@Component({
  selector: 'app-learning-category2',
  templateUrl: './learning-category2.component.html',
  styleUrls: ['./learning-category2.component.scss']
})
export class LearningCategory2Component {
  
  slideConfig = {
    infinite: false,
    dots: false,
    arrows: true,
    prevArrow:"<button type='button' class='btn btn-outline-secondary left-arrow'><i class='bi bi-arrow-left-short'></i></button>",
    nextArrow:"<button type='button' class='btn btn-outline-secondary right-arrow'><i class='bi-arrow-right-short'></i></button>",

    slidesToShow:3.5,
    slidesToScroll: 1,
    swipeToSlide: true, 
    touchThreshold: 100,
    responsive: [
        {
            breakpoint: 992,
            settings: {
              slidesToShow:2.5,
                slidesToScroll: 1
            }
        }
        ,
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
              arrows: false,
              slidesToShow:1.5,
                slidesToScroll: 1
            }
        }
    ]
  };

  relatedData:any = [
    {
      "id": 1,
      "imgSrc": "assets/images/knowledge-center/category1.png",
      "timeTag": "4 mins read",
      "views": "1K",
      "wishlistCount": 300,
      "title": "How to save tax with ELSS How tax with ELSS How to save tax with to save tax with ELSS How to save tax with ELSS"
    },
    {
      "id": 2,
      "imgSrc": "assets/images/knowledge-center/category2.png",
      "timeTag": "11.21",
      "views": "1K",
      "wishlistCount": 300,
      "title": "How to save tax with ELSS How to save tax with ELSS"
    },
    {
      "id": 3,
      "imgSrc": "assets/images/knowledge-center/category1.png",
      "timeTag": "4 mins read",
      "views": "1K",
      "wishlistCount": 300,
      "title": "Third Article Title"
    },
    {
      "id": 4,
      "imgSrc": "assets/images/knowledge-center/category2.png",
      "timeTag": "11.21",
      "views": "1K",
      "wishlistCount": 300,
      "title": "Fourth Article Title"
    },
    {
      "id": 5,
      "imgSrc": "assets/images/knowledge-center/category1.png",
      "timeTag": "4 mins read",
      "views": "1K",
      "wishlistCount": 300,
      "title": "Fifth Article Title"
    }
  ]
  toggleFilter=false;
  showIconForWishlist: boolean[] = [];
  showIconForWatchlist: boolean[] = [];
  showTooltip: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.relatedData.forEach(() => {
      this.showIconForWishlist.push(true);
      this.showIconForWatchlist.push(true);
    });
  }

  toggleIconForWishlist(index: number) {
    this.showIconForWishlist[index] = !this.showIconForWishlist[index];
  }
  
  toggleIconForWatchlist(index: number) {
    this.showIconForWatchlist[index] = !this.showIconForWatchlist[index];
  }

  toggleTooltip()
  {
    this.showTooltip = false;
  }


}
