import { Component, Input, OnInit  } from '@angular/core';
import { KnowledgecenterService } from 'src/app/shared/services/knowledge-center/knowledgecenter.service';

@Component({
  selector: 'app-related-resources',
  templateUrl: './related-resources.component.html',
  styleUrls: ['./related-resources.component.scss']
})
export class RelatedResourcesComponent implements OnInit{
  @Input() resources:any =[];
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
  showTooltip: boolean = false;
  showIconForWishlist: boolean[] = [];
  showIconForWatchlist: boolean[] = [];
  getData:any;

  relatedData:any = [
    {
      "id": 1,
      "imgSrc": "assets/images/knowledge-center/category1.png",
      "timeTag": "4 mins read",
      "views": "1K",
      "wishlistCount": 300,
      "title": "How to save tax with ELSS How to save tax with ELSS How to save tax with ELSS"
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

  constructor(private _knowledgeCenterData :KnowledgecenterService) { }

  ngOnInit(): void {
    this.getCategory()
  }

  getCategory(type = "All")
  {
    this._knowledgeCenterData.getCategoryCardData().subscribe((res)=>{
      this.getData = res;
      if(type != "All"){
        this.getData = this.getData.filter((res:any)=>
        res.category == type
      ); 
      }
      console.log(res);
      this.getData.forEach(() => {
        this.showIconForWishlist.push(true);
        this.showIconForWatchlist.push(true);
      });
    })
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
