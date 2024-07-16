import { Component, HostListener } from '@angular/core';
import { FundService } from 'src/app/shared/services/fund.service';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss']
})
export class LikeComponent {

  selectedCategory: string = 'All';
  categories: string[] = ['All', 'term_Busters', 'Videos', 'Articles'];
  isDropdownOpen = false;
  toggleFilter=false;

  checkboxes = [
    { id: 'check1', label: 'Mutual Funds', isChecked: true },
    { id: 'check2', label: 'Women & Investing', isChecked: false },
    { id: 'check3', label: 'Child’s future', isChecked: false },
    { id: 'check4', label: 'Retirement planning', isChecked: false },
    { id: 'check5', label: 'Category 1', isChecked: false },
    { id: 'E-Booklest', label: 'E-Booklest', isChecked: false },
    { id: 'check6', label: 'Blog', isChecked: false },
    { id: 'check7', label: 'Podcast', isChecked: false },
    { id: 'check8', label: 'Frankly Speaking', isChecked: false },
    { id: 'Investment-Glossary', label: 'Investment Glossary', isChecked: false },
  ];

  subcheckboxe = [
    { id: 'check9', label: 'Most Viewed', isChecked: true },
    { id: 'check10', label: 'Top Rated', isChecked: false },
    { id: 'check11', label: 'Trending', isChecked: false },
    { id: 'check12', label: 'Content of the week', isChecked: false }
];

checkboxeFranklin = [
  { id: 'about_Us', label: 'About us', isChecked: true },
  { id: 'explore_Courses', label: 'Explore Courses', isChecked: false },
  { id: 'join_For_Free', label: 'Join For Free', isChecked: false },
]

checkboxeMarket = [
  { id: 'blogs', label: 'Blogs', isChecked: true },
  { id: 'latest_Commentaries', label: 'Latest Commentaries', isChecked: false },
]

getData:any = [
    {
      "imgSrc": "assets/images/knowledge-center/category1.png",
      "timeTag": "4 mins read",
      "views": "1K",
      "likes": 300,
      "title": "How to save tax with ELSS How to save tax with ELSS How to save tax with ELSS"
    },
    {
      "imgSrc": "assets/images/knowledge-center/category1.png",
      "timeTag": "4 mins read",
      "views": "1K",
      "likes": 300,
      "title": "How to save tax with ELSS How to save tax with ELSS"
    },
    {
      "imgSrc": "assets/images/knowledge-center/category1.png",
      "timeTag": "4 mins read",
      "views": "1K",
      "likes": 300,
      "title": "How to save tax with ELSS"
    },
    {
      "imgSrc": "assets/images/knowledge-center/category1.png",
      "timeTag": "4 mins read",
      "views": "1K",
      "likes": 300,
      "title": "How to save tax with ELSS"
    },
    {
      "imgSrc": "assets/images/knowledge-center/category1.png",
      "timeTag": "4 mins read",
      "views": "1K",
      "likes": 300,
      "title": "How to save tax with ELSS"
    },
    {
      "imgSrc": "assets/images/knowledge-center/category1.png",
      "timeTag": "4 mins read",
      "views": "1K",
      "likes": 300,
      "title": "How to save tax with ELSS"
    },
    {
      "imgSrc": "assets/images/knowledge-center/category1.png",
      "timeTag": "4 mins read",
      "views": "1K",
      "likes": 300,
      "title": "How to save tax with ELSS"
    },
    {
      "imgSrc": "assets/images/knowledge-center/category1.png",
      "timeTag": "4 mins read",
      "views": "1K",
      "likes": 300,
      "title": "How to save tax with ELSS"
    }
  ]

  showIconForWishlist: boolean[] = [];
  showIconForWatchlist: boolean[] = [];
  showTooltip: boolean = false;
  searchTerm: string = '';
  funds: any = []; // please maintain model don't use any 
  getMutualCard: any;
  selectedFund: any = null;
  fundsForSearch: any = [];
  fullFundsArray: any = [];



  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    const targetElement = event.target as HTMLElement;

    // console.log(targetElement)

    // Check if the closest method is available
    if (targetElement.closest && !targetElement.closest('.category-dropdown')) {
      console.log('1')
      this.isDropdownOpen = false;
    }
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

  constructor(private _fundServices: FundService) {}

  ngOnInit(): void {
    this.getData.forEach(() => {
      this.showIconForWishlist.push(false);
      this.showIconForWatchlist.push(true);
    });
    this.getMockFunds();
  }

  selectCategory(category: string): void {
    console.log(category)
    this.selectedCategory = category;
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  toggleCheckbox(clickedCheckbox: { id: string, label: string, isChecked: boolean }): void {
    console.log(clickedCheckbox)
    // Uncheck all checkboxes
    this.checkboxes.forEach(checkbox => checkbox.isChecked = false);

    // Toggle the clicked checkbox
    clickedCheckbox.isChecked = true;
}

toggleSubCheckbox(clickedCheckbox: { id: string, label: string, isChecked: boolean }): void {
  console.log(clickedCheckbox);
  
  // Uncheck all checkboxes
  this.subcheckboxe.forEach(checkbox => checkbox.isChecked = false);

  // Toggle the clicked checkbox
  clickedCheckbox.isChecked = true;
}

toggleFranklinCheckbox(clickedCheckbox: { id: string, label: string, isChecked: boolean }): void {
  console.log(clickedCheckbox);
  
  // Uncheck all checkboxes
  this.checkboxeFranklin.forEach(checkbox => checkbox.isChecked = false);

  // Toggle the clicked checkbox
  clickedCheckbox.isChecked = true;
}

toggleMarketCheckbox(clickedCheckbox: { id: string, label: string, isChecked: boolean }): void {
  console.log(clickedCheckbox);
  
  // Uncheck all checkboxes
  this.checkboxeMarket.forEach(checkbox => checkbox.isChecked = false);

  // Toggle the clicked checkbox
  clickedCheckbox.isChecked = true;
}

toggleIconForWishlist(index: number) {
  this.showIconForWishlist[index] = !this.showIconForWishlist[index];
}

toggleIconForWatchlist(index: number) {
  this.showIconForWatchlist[index] = !this.showIconForWatchlist[index];
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

toggleFilterBox(){
  this.toggleFilter = !this.toggleFilter
}

toggleTooltip()
{
  this.showTooltip = false;
}

}
