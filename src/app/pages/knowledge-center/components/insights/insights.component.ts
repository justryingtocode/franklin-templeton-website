import { Component } from '@angular/core';

@Component({
  selector: 'app-insights',
  templateUrl: './insights.component.html',
  styleUrls: ['./insights.component.scss']
})
export class InsightsComponent {

  showIconForWishlist1: boolean[] = [];
  showIconForWatchlist1: boolean[] = [];
  showIconForWishlist2: boolean[] = [];
  showIconForWatchlist2: boolean[] = [];
  showTooltip: boolean = false;

  relateddata1: any =  [
      {
        "title": "Outlook for GCC bond and equity markets amid",
        "date": "October 18, 2022",
        "image": "assets/images/knowledge-center/category1.png",
        "time": "4 mins read"
      },
      {
        "title": "Outlook for GCC bond and equity markets amid",
        "date": "October 18, 2022",
        "image": "assets/images/knowledge-center/category1.png",
        "time": "4 mins read"
      },
      {
        "title": "Outlook for GCC bond and equity markets amid",
        "date": "October 18, 2022",
        "image": "assets/images/knowledge-center/category1.png",
        "time": "4 mins read"
      }
    ]


  realteddata2:any =  [
      {
        "title": "Weekly Market Review",
        "date": "October 18, 2022",
        "image": "assets/images/knowledge-center/img1.png",
        "time": "4 mins read"
      },
      {
        "title": "Weekly Market Review",
        "date": "October 18, 2022",
        "image": "assets/images/knowledge-center/img1.png",
        "time": "4 mins read"
      },
      {
        "title": "Weekly Market Review",
        "date": "October 18, 2022",
        "image": "assets/images/knowledge-center/img1.png",
        "time": "4 mins read"
      }
    ]

  
  

  constructor() {}

  ngOnInit()
  {

  }

  toggleIconForWishlist1(index: number) {
    this.showIconForWishlist1[index] = !this.showIconForWishlist1[index];
  }

  toggleIconForWatchlist1(index: number) {
    this.showIconForWatchlist1[index] = !this.showIconForWatchlist1[index];
  }

  toggleIconForWishlist2(index: number) {
    this.showIconForWishlist2[index] = !this.showIconForWishlist2[index];
  }

  toggleIconForWatchlist2(index: number) {
    this.showIconForWatchlist2[index] = !this.showIconForWatchlist2[index];
  }

  toggleTooltip()
  {
    this.showTooltip = false;
  }

}
