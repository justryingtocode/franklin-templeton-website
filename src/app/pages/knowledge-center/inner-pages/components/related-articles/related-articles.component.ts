import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-related-articles',
  templateUrl: './related-articles.component.html',
  styleUrls: ['./related-articles.component.scss']
})
export class RelatedArticlesComponent implements OnInit{

  showIconForWishlist: boolean[] = [];
  showIconForWatchlist: boolean[] = [];
  showTooltip: boolean = false;

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
      "imgSrc": "assets/images/knowledge-center/category1.png",
      "timeTag": "4 mins read",
      "views": "1K",
      "wishlistCount": 300,
      "title": "How to save tax with ELSS"
    },
    {
      "imgSrc": "assets/images/knowledge-center/category2.png",
      "timeTag": "11.21",
      "views": "1K",
      "wishlistCount": 300,
      "title": "Another Article Title"
    },
    {
      "imgSrc": "assets/images/knowledge-center/category1.png",
      "timeTag": "4 mins read",
      "views": "1K",
      "wishlistCount": 300,
      "title": "Third Article Title"
    },
    {
      "imgSrc": "assets/images/knowledge-center/category2.png",
      "timeTag": "11.21",
      "views": "1K",
      "wishlistCount": 300,
      "title": "Fourth Article Title"
    },
    {
      "imgSrc": "assets/images/knowledge-center/category1.png",
      "timeTag": "4 mins read",
      "views": "1K",
      "wishlistCount": 300,
      "title": "Fifth Article Title"
    }
  ]

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
