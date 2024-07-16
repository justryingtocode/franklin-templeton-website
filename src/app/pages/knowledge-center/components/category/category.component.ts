import { Component, HostListener, OnInit  } from '@angular/core';
import { FundService } from 'src/app/shared/services/fund.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit{
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
  toggleFilter=false;
  showNextData: boolean = false;
  showTooltip: boolean = false;
  showIconForWishlist: boolean[] = [];
  showIconForWatchlist: boolean[] = [];
  searchTerm: string = '';
  funds: any = []; // please maintain model don't use any 
  getMutualCard: any;
  selectedFund: any = null;
  fundsForSearch: any = [];
  fullFundsArray: any = [];

  selectedCategory: string = 'All';
  visibleCategories: number = 3;
  categories: string[] = ['Category_1', 'E-Booklet', 'Frankly Speaking', 'Prodcast', 'Frankly_Speaking', 'Like', 'Wishlist', 'Your-childs-future', 'Smart-tax-planning', 'Blogs'];

  searchPlaceholderText: string = "";
  
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

  @HostListener('window:resize', ['$event'])
  onWindowResize($event: any={}){

    // based on width changed search placeholder
    const element: any = $(document).width();
    if(element < 500){
      this.searchPlaceholderText = "Search";
    }else{
      this.searchPlaceholderText = "Search articles, videos, blogs, podcasts, & e-books...";
    }
  }


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

  relatedData1:any = [
    {
      "id": 1,
      "imgSrc": "assets/images/knowledge-center/ebook-img1.png",
      "timeTag": "4 mins read",
      "views": "1K",
      "wishlistCount": 300,
      "title": "How to save tax with ELSS How to save tax with ELSS How to save tax with ELSS"
    },
    {
      "id": 2,
      "imgSrc": "assets/images/knowledge-center/ebook-img2.png",
      "timeTag": "11.21",
      "views": "1K",
      "wishlistCount": 300,
      "title": "How to save tax with ELSS How to save tax with ELSS"
    },
    {
      "id": 3,
      "imgSrc": "assets/images/knowledge-center/ebook-img1.png",
      "timeTag": "4 mins read",
      "views": "1K",
      "wishlistCount": 300,
      "title": "Third Article Title"
    },
    {
      "id": 4,
      "imgSrc": "assets/images/knowledge-center/ebook-img2.png",
      "timeTag": "11.21",
      "views": "1K",
      "wishlistCount": 300,
      "title": "Fourth Article Title"
    },
    {
      "id": 5,
      "imgSrc": "assets/images/knowledge-center/ebook-img1.png",
      "timeTag": "4 mins read",
      "views": "1K",
      "wishlistCount": 300,
      "title": "Fifth Article Title"
    }
  ]

  relatedData2:any = [
    {
      "id": 1,
      "imgSrc": "assets/images/knowledge-center/audio-img.png",
      "timeTag": "4 mins read",
      "views": "1K",
      "wishlistCount": 300,
      "title": "How to save tax with ELSS How to save tax with ELSS How to save tax with ELSS"
    },
    {
      "id": 2,
      "imgSrc": "assets/images/knowledge-center/audio-img.png",
      "timeTag": "11.21",
      "views": "1K",
      "wishlistCount": 300,
      "title": "How to save tax with ELSS How to save tax with ELSS"
    },
    {
      "id": 3,
      "imgSrc": "assets/images/knowledge-center/audio-img.png",
      "timeTag": "4 mins read",
      "views": "1K",
      "wishlistCount": 300,
      "title": "Third Article Title"
    },
    {
      "id": 4,
      "imgSrc": "assets/images/knowledge-center/audio-img.png",
      "timeTag": "11.21",
      "views": "1K",
      "wishlistCount": 300,
      "title": "Fourth Article Title"
    },
    {
      "id": 5,
      "imgSrc": "assets/images/knowledge-center/audio-img.png",
      "timeTag": "4 mins read",
      "views": "1K",
      "wishlistCount": 300,
      "title": "Fifth Article Title"
    }
  ]

  relatedData3:any[] = [];
  relatedData4:any[] = [];


  constructor(private _fundServices: FundService) { }

  ngOnInit(): void {
    this.relatedData.forEach(() => {
      this.showIconForWishlist.push(true);
      this.showIconForWatchlist.push(true);
    });

    this.relatedData1.forEach(() => {
      this.showIconForWishlist.push(true);
      this.showIconForWatchlist.push(true);
    });
    this.getMockFunds();
    this.onWindowResize();
  }

  scrollTo(param: any) {
    console.log(param)
    const elementToScroll = document.getElementById(param);
    if (elementToScroll) {
      // Scroll to the element with a delay of 10 milliseconds (or any desired delay)
        elementToScroll.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest"
        });
    }
  }

  toggleFilterBox(){
    this.toggleFilter = !this.toggleFilter;
  }
  
  selectCategory(category: string): void {
    console.log(category)
    this.selectedCategory = category;
    if(category !== 'All' )
    {
      this.visibleCategories = this.categories.length;
    }
    else{
      this.visibleCategories = 3;
    }
  }

  loadMoreCategories(): void {
   this.visibleCategories = this.categories.length - 2;
   this.showNextData = true;
  }

  loadLessCategories(): void {
    this.visibleCategories = 3;
    this.showNextData = false;
  }

  loadMoreData(){
    this.visibleCategories = this.categories.length;
    this.showNextData = false;
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
    this.relatedData3.push(category);
  }

  removeToLike(category:any)
  {
    console.log(category);
    this.relatedData3.pop();
  }

  addToWatshlist(category:any)
  {
    console.log(category);
    this.relatedData4.push(category);
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

  removeToWatchlist(category:any)
  {
   console.log(category)
   this.relatedData4.pop();
  }

  toggleTooltip()
  {
    this.showTooltip = false;
  }

}
