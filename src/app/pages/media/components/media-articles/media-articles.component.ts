import { Component, HostListener } from '@angular/core';
import { FundService } from 'src/app/shared/services/fund.service';

@Component({
  selector: 'app-media-articles',
  templateUrl: './media-articles.component.html',
  styleUrls: ['./media-articles.component.scss']
})
export class MediaArticlesComponent {

  selectedCategory: string = 'All';
  searchTerm: string = '';
  funds: any = []; // please maintain model don't use any 
  fundsForSearch: any = [];
  fullFundsArray: any = [];
  getMutualCard: any;
  selectedFund: any = null;
  showIconForWishlist: boolean[] = [];
  showIconForWatchlist: boolean[] = [];
  showCopyDialoge = false;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event: any) {
 
    const sections = document.querySelectorAll<any>('.fd-tab-sections');
    const navLi = document.querySelectorAll('.FT-blocks-nav ul li');
    let current = '';
    // console.log(sections, navLi);

    sections.forEach((section) => {
      // console.log(section)
      const sectionTop = section.offsetTop;
      if (pageYOffset >= (sectionTop - 85)) {
        current = section.getAttribute('id');
      }
    });

    navLi.forEach((li) => {
      // console.log(li)
      current? li.children[0].classList.remove('active-item') : '';
      // li.children[0].classList.remove('active-item');
      if (li.children[0].classList.contains(current)) {
        li.children[0].classList.add('active-item');
      }
    });
  }

  @HostListener('click', ['$event'])
  getTableDataPage(event: Event) {
 
   console.log((event.target as Element).className)
   if((event.target as Element).className === 'form-control search ng-untouched ng-pristine ng-valid' || (event.target as Element).className === 'form-control search ng-valid ng-dirty ng-touched' || (event.target as Element).className === 'form-control search ng-valid ng-touched ng-dirty' )
   {
     console.log('1')
     this.fundsForSearch = this.fullFundsArray
   }
   else{
     console.log('2')
     this.fundsForSearch = []
   }
   
  }

  relatedData:any[] =  [
      { "id":1,
        "title": "How to save tax with ELSS",
        "imageSrc": "assets/images/knowledge-center/category1.png",
        "timeTag": "4 mins read",
        "views": "1K",
        "likes": 300
      },
      {
        "id":2,
        "title": "Your Second Card Title",
        "imageSrc": "assets/images/knowledge-center/category2.png",
        "timeTag": "3 mins read",
        "views": "800",
        "likes": 200
      },
      {
        "id":3,
        "title": "Another Card Title",
        "imageSrc": "assets/images/knowledge-center/category1.png",
        "timeTag": "5 mins read",
        "views": "1.5K",
        "likes": 400
      },
      {
        "id":4,
        "title": "Card Title 4",
        "imageSrc": "assets/images/knowledge-center/category2.png",
        "timeTag": "2 mins read",
        "views": "700",
        "likes": 150
      },
      {
        "id":5,
        "title": "Fifth Card Title",
        "imageSrc": "assets/images/knowledge-center/category1.png",
        "timeTag": "6 mins read",
        "views": "2K",
        "likes": 500
      },
      {
        "id":6,
        "title": "Card Title Six",
        "imageSrc": "assets/images/knowledge-center/category2.png",
        "timeTag": "4 mins read",
        "views": "1.2K",
        "likes": 350
      },
      {
        "id":7,
        "title": "Seventh Card Title",
        "imageSrc": "assets/images/knowledge-center/category1.png",
        "timeTag": "3 mins read",
        "views": "900",
        "likes": 250
      },
      {
        "id":8,
        "title": "Card Title 8",
        "imageSrc": "assets/images/knowledge-center/category2.png",
        "timeTag": "5 mins read",
        "views": "1.8K",
        "likes": 450
      }
    ]

   

constructor(private _fundServices: FundService) {}

ngOnInit(): void {
  this.relatedData.forEach(() => {
    this.showIconForWishlist.push(true);
    this.showIconForWatchlist.push(true);
  });

  this.getMockFunds();
  
}


selectCategory(category: string): void {
  console.log(category)
  this.selectedCategory = category;
  // if(category !== 'All' )
  // {
  //   this.visibleCategories = this.categories.length;
  // }
  // else{
  //   this.visibleCategories = 3;
  // }
}

toggleIconForWishlist(index: number) {
  this.showIconForWishlist[index] = !this.showIconForWishlist[index];
}

toggleIconForWatchlist(index: number) {
  this.showIconForWatchlist[index] = !this.showIconForWatchlist[index];
}

addToLike(category:any)
{
  console.log(category);
}

removeToLike(category:any)
{
  console.log(category);
}

addToWatshlist(category:any)
{
  console.log(category);
}

removeToWatchlist(category:any)
{
 console.log(category)
}

resetFundExplore()
{
  this.funds = this.fullFundsArray;
  this.searchTerm = '';
}

filterFunds(searchTerm: string) {
  if (searchTerm) {
    this.fundsForSearch = this.funds
    // console.log(this.fundsForSearch)
    this.fundsForSearch = this.fundsForSearch.filter((fund: any) =>
      fund.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  } else {
    this.fundsForSearch = this.fullFundsArray; // Clear the filtered results when input is empty
  }

}

getMockFunds = () => {
  this.funds = []
  this._fundServices.getMockFundsData().subscribe({
    next: (result) => {
      this.funds = result;
      this.fullFundsArray = result;
      console.log(this.funds);
      this.getMutualCard = this.funds.filter((item: any) => item).length;
    },
    error: (err) => {
      console.log(err);
    }
  })
}

getTableTitle(fund: any) {
  this.selectedFund = fund; // Update the selected fund variable
  this.searchTerm = this.selectedFund.title;
  const fundsArray = [...this.fullFundsArray]; 
  const selectedFund = fundsArray.find(fund => fund.id === this.selectedFund.id);
  this.funds = [selectedFund]
}

toggleShowCopyDialoge() {
  this.showCopyDialoge = !this.showCopyDialoge;
}



}
