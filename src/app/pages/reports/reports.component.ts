import { Component, HostListener, OnInit } from '@angular/core';
import { FundService } from 'src/app/shared/services/fund.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
  selecteReportTab: any = {}
  selectedCategory: string = '';
  categories: string[] = [];
  selectedCategoryData: any[] = [];
  selectedMenuName: string = "";
  //  search bar 
  fundsForSearch: any = [];
  fullFundsArray: any = [];
  searchTerm: string = '';
  funds: any = [];
  getMutualCard: any;
  selectedFund: any = null;



  @HostListener('click', ['$event'])
  getTableDataPage(event: Event) {

    console.log((event.target as Element).className)
    if ((event.target as Element).className === 'form-control search ng-untouched ng-pristine ng-valid' || (event.target as Element).className === 'form-control search ng-valid ng-dirty ng-touched' || (event.target as Element).className === 'form-control search ng-valid ng-touched ng-dirty') {
      console.log('1')
      this.fundsForSearch = this.fullFundsArray
    }
    else {
      console.log('2')
      this.fundsForSearch = []
    }

  }
  constructor(private _fundServices: FundService) { }



  ngOnInit() {
    this.selectReportTab(this.dataArray[0]);
    this.getMockFunds();
  }

  dataArray: any[] =
    [
      {
        "menu-title": "Discloser of AUM by Geography",
        "menu-id" : 1,
        "disclosers": [
          {
            "year": 2023,
            "title": "December 2023"
          },
          {
            "year": 2023,
            "title": "March 2023"
          },
          {
            "year": 2023,
            "title": "September 2023"
          },
          {
            "year": 2023,
            "title": "June 2023"
          },
          {
            "year": 2023,
            "title": "December 2021"
          },
          {
            "year": 2022,
            "title": "December 2023"
          },
          {
            "year": 2022,
            "title": "March 2023"
          },
          {
            "year": 2022,
            "title": "September 2023"
          },
          {
            "year": 2022,
            "title": "June 2023"
          },
          {
            "year": 2022,
            "title": "December 2021"
          },
          {
            "year": 2021,
            "title": "September 2023"
          },
          {
            "year": 2021,
            "title": "June 2023"
          },
          {
            "year": 2021,
            "title": "December 2021"
          },
          {
            "year": 2021,
            "title": "September 2023"
          },
          {
            "year": 2020,
            "title": "June 2023"
          },
          {
            "year": 2020,
            "title": "December 2021"
          },
          {
            "year": 2020,
            "title": "December 2021"
          },
          {
            "year": 2020,
            "title": "September 2023"
          },
          {
            "year": 2020,
            "title": "June 2023"
          },
          {
            "year": 2019,
            "title": "December 2021"
          },
          {
            "year": 2019,
            "title": "December 2021"
          },
          {
            "year": 2019,
            "title": "September 2023"
          },
          {
            "year": 2019,
            "title": "June 2023"
          },
          {
            "year": 2018,
            "title": "December 2021"
          },
          {
            "year": 2017,
            "title": "December 2021"
          }, {
            "year": 2016,
            "title": "December 2021"
          },
          {
            "year": 2015,
            "title": "December 2021"
          },
          {
            "year": 2014,
            "title": "December 2021"
          },
          {
            "year": 2013,
            "title": "December 2021"
          }
        ]
      },
      {
        "menu-title": "Investor Complaint Reports",
        "menu-id": 2,
        "disclosers": [
          {
            "year": 2024,
            "title": "December 2023"
          },
          {
            "year": 2024,
            "title": "March 2023"
          },
          {
            "year": 2024,
            "title": "September 2023"
          },
          {
            "year": 2023,
            "title": "June 2023"
          },
          {
            "year": 2023,
            "title": "December 2021"
          },
          {
            "year": 2023,
            "title": "June 2023"
          },
          {
            "year": 2023,
            "title": "December 2021"
          },
          {
            "year": 2023,
            "title": "December 2023"
          },
          {
            "year": 2023,
            "title": "December 2023"
          },
          {
            "year": 2023,
            "title": "March 2023"
          },
          {
            "year": 2022,
            "title": "September 2023"
          },
          {
            "year": 2022,
            "title": "June 2023"
          },
          {
            "year": 2022,
            "title": "December 2021"
          },
          {
            "year": 2021,
            "title": "December 2023"
          },
          {
            "year": 2021,
            "title": "March 2023"
          },
          {
            "year": 2022,
            "title": "December 2021"
          },
          {
            "year": 2021,
            "title": "December 2023"
          },
          {
            "year": 2021,
            "title": "March 2023"
          },
          {
            "year": 2021,
            "title": "September 2023"
          },
          {
            "year": 2021,
            "title": "June 2023"
          },
          {
            "year": 2020,
            "title": "December 2021"
          },
          {
            "year": 2020,
            "title": "September 2023"
          },
          {
            "year": 2020,
            "title": "June 2023"
          },
          {
            "year": 2020,
            "title": "December 2021"
          },
          {
            "year": 2020,
            "title": "September 2023"
          },
          {
            "year": 2020,
            "title": "June 2023"
          },
          {
            "year": 2020,
            "title": "December 2021"
          },
          {
            "year": 2019,
            "title": "September 2023"
          },
          {
            "year": 2019,
            "title": "June 2023"
          },
          {
            "year": 2019,
            "title": "December 2021"
          }

        ]
      },
      {
        "menu-title": "Voating Policy",
        "menu-id": 3,
        "disclosers": [
          {
            "year": 2024,
            "title": "December 2023"
          },
          {
            "year": 2024,
            "title": "March 2023"
          },
          {
            "year": 2022,
            "title": "September 2023"
          },
          {
            "year": 2022,
            "title": "September 2023"
          },
          {
            "year": 2021,
            "title": "December 2021"
          },
          {
            "year": 2023,
            "title": "December 2023"
          },
          {
            "year": 2023,
            "title": "March 2023"
          },
          {
            "year": 2023,
            "title": "September 2023"
          },
          {
            "year": 2023,
            "title": "June 2023"
          },
          {
            "year": 2023,
            "title": "December 2021"
          },
          {
            "year": 2023,
            "title": "December 2023"
          },
          {
            "year": 2025,
            "title": "March 2023"
          },
          {
            "year": 2022,
            "title": "September 2023"
          },
          {
            "year": 2022,
            "title": "June 2023"
          },
          {
            "year": 2022,
            "title": "December 2021"
          },
          {
            "year": 2022,
            "title": "September 2023"
          },
          {
            "year": 2022,
            "title": "June 2023"
          },
          {
            "year": 2022,
            "title": "December 2021"
          },
          {
            "year": 2022,
            "title": "September 2023"
          },
          {
            "year": 2022,
            "title": "June 2023"
          },
          {
            "year": 2022,
            "title": "December 2021"
          }
        ]
      },
      {
        "menu-title": "Valuation Policy",
        "menu-id": 4,
        "disclosers": [
          {
            "year": 2024,
            "title": "December 2023"
          },
          {
            "year": 2024,
            "title": "March 2023"
          },
          {
            "year": 2022,
            "title": "September 2023"
          },
          {
            "year": 2022,
            "title": "September 2023"
          },
          {
            "year": 2021,
            "title": "December 2021"
          }
        ]
      },
      {
        "menu-title": "Mutual Fund Reports",
        "menu-id": 5,
        "disclosers": [
          {
            "year": 2024,
            "title": "December 2023"
          },
          {
            "year": 2024,
            "title": "March 2023"
          },
          {
            "year": 2022,
            "title": "September 2023"
          },
          {
            "year": 2022,
            "title": "September 2023"
          },
          {
            "year": 2021,
            "title": "December 2021"
          },
          {
            "year": 2023,
            "title": "December 2023"
          },
          {
            "year": 2023,
            "title": "March 2023"
          },
          {
            "year": 2023,
            "title": "September 2023"
          },
          {
            "year": 2023,
            "title": "June 2023"
          },
          {
            "year": 2023,
            "title": "December 2021"
          },
          {
            "year": 2023,
            "title": "December 2023"
          },
          {
            "year": 2025,
            "title": "March 2023"
          },
          {
            "year": 2022,
            "title": "September 2023"
          },
          {
            "year": 2022,
            "title": "June 2023"
          },
          {
            "year": 2022,
            "title": "December 2021"
          },
          {
            "year": 2022,
            "title": "September 2023"
          },
          {
            "year": 2022,
            "title": "June 2023"
          },
          {
            "year": 2022,
            "title": "December 2021"
          },
          {
            "year": 2022,
            "title": "September 2023"
          },
          {
            "year": 2022,
            "title": "June 2023"
          },
          {
            "year": 2022,
            "title": "December 2021"
          }
        ]
      },
      {
        "menu-title": "Anual Reports",
        "menu-id": 6,
        "disclosers": [
          {
            "year": 2024,
            "title": "December 2023"
          },
          {
            "year": 2024,
            "title": "March 2023"
          },
          {
            "year": 2022,
            "title": "September 2023"
          },
          {
            "year": 2022,
            "title": "September 2023"
          },
          {
            "year": 2021,
            "title": "December 2021"
          },
          {
            "year": 2023,
            "title": "December 2023"
          },
          {
            "year": 2023,
            "title": "March 2023"
          },
          {
            "year": 2023,
            "title": "September 2023"
          },
          {
            "year": 2023,
            "title": "June 2023"
          },
          {
            "year": 2023,
            "title": "December 2021"
          },
          {
            "year": 2023,
            "title": "December 2023"
          },
          {
            "year": 2025,
            "title": "March 2023"
          },
          {
            "year": 2022,
            "title": "September 2023"
          },
          {
            "year": 2022,
            "title": "June 2023"
          },
          {
            "year": 2022,
            "title": "December 2021"
          },
          {
            "year": 2022,
            "title": "September 2023"
          },
          {
            "year": 2022,
            "title": "June 2023"
          },
          {
            "year": 2022,
            "title": "December 2021"
          },
          {
            "year": 2022,
            "title": "September 2023"
          },
          {
            "year": 2022,
            "title": "June 2023"
          },
          {
            "year": 2022,
            "title": "December 2021"
          }
        ]
      },
      {
        "menu-title": "Descloser of transection in debet and money maket security",
        "menu-id": 7,
        "disclosers": [
          {
            "year": 2024,
            "title": "December 2023"
          },
          {
            "year": 2024,
            "title": "March 2023"
          },
          {
            "year": 2022,
            "title": "September 2023"
          },
          {
            "year": 2022,
            "title": "September 2023"
          },
          {
            "year": 2021,
            "title": "December 2021"
          },
          {
            "year": 2023,
            "title": "December 2023"
          },
          {
            "year": 2023,
            "title": "March 2023"
          },
          {
            "year": 2023,
            "title": "September 2023"
          },
          {
            "year": 2023,
            "title": "June 2023"
          },
          {
            "year": 2023,
            "title": "December 2021"
          },
          {
            "year": 2023,
            "title": "December 2023"
          },
          {
            "year": 2025,
            "title": "March 2023"
          },
          {
            "year": 2022,
            "title": "September 2023"
          },
          {
            "year": 2022,
            "title": "June 2023"
          },
          {
            "year": 2022,
            "title": "December 2021"
          },
          {
            "year": 2022,
            "title": "September 2023"
          },
          {
            "year": 2022,
            "title": "June 2023"
          },
          {
            "year": 2022,
            "title": "December 2021"
          },
          {
            "year": 2022,
            "title": "September 2023"
          },
          {
            "year": 2022,
            "title": "June 2023"
          },
          {
            "year": 2022,
            "title": "December 2021"
          }
        ]
      },
      {
        "menu-title": "Fortightly portfolio of debet schemes",
        "menu-id": 8,
        "disclosers": [
          {
            "year": 2024,
            "title": "December 2023"
          },
          {
            "year": 2024,
            "title": "March 2023"
          },
          {
            "year": 2022,
            "title": "September 2023"
          },
          {
            "year": 2022,
            "title": "September 2023"
          },
          {
            "year": 2021,
            "title": "December 2021"
          }
        ]
      },
      {
        "menu-title": "Fortightly Portfolio",
        "menu-id": 9,
        "disclosers": [
          {
            "year": 2024,
            "title": "December 2023"
          },
          {
            "year": 2024,
            "title": "March 2023"
          },
          {
            "year": 2022,
            "title": "September 2023"
          },
          {
            "year": 2022,
            "title": "September 2023"
          },
          {
            "year": 2021,
            "title": "December 2021"
          }
        ]
      },
      {
        "menu-title": "Debet Schemes",
        "menu-id": 10,
        "disclosers": [
          {
            "year": 2024,
            "title": "December 2023"
          },
          {
            "year": 2024,
            "title": "March 2023"
          },
          {
            "year": 2022,
            "title": "September 2023"
          },
          {
            "year": 2022,
            "title": "September 2023"
          },
          {
            "year": 2021,
            "title": "December 2021"
          }
        ]
      },
      {
        "menu-title": "Portfolio of Debet",
        "menu-id": 11,
        "disclosers": [
          {
            "year": 2024,
            "title": "December 2023"
          },
          {
            "year": 2024,
            "title": "March 2023"
          },
          {
            "year": 2022,
            "title": "September 2023"
          },
          {
            "year": 2022,
            "title": "September 2023"
          },
          {
            "year": 2021,
            "title": "December 2021"
          }
        ]
      }
    ]

  selectReportTab(tab: any): void {
    console.log(tab)
    this.selectedMenuName = tab['menu-title'];
    console.log("selected report tab", tab);
    this.selecteReportTab = tab;

    const tabCategories: any[] = ['All'];

    tab.disclosers.forEach((t: any) => {
      if (!tabCategories.includes(`${t.year}`)) {
        tabCategories.push(`${t.year}`)
      }
    })

    this.categories = tabCategories

    this.selectCategory('All');
  }
  selectReportTabByDropDown(event: any) {
    this.selectedMenuName = event.target.value;
    let tab = this.dataArray.filter((x: any) => x["menu-title"] == this.selectedMenuName)[0];
    console.log("selected report tab", tab);
    this.selecteReportTab = tab;

    const tabCategories: any[] = ['All'];

    tab.disclosers.forEach((t: any) => {
      if (!tabCategories.includes(`${t.year}`)) {
        tabCategories.push(`${t.year}`)
      }
    })

    this.categories = tabCategories

    this.selectCategory('All')
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;

    if (category === 'All') {
      this.selectedCategoryData = this.selecteReportTab.disclosers;
    } else {
      this.selectedCategoryData = this.selecteReportTab.disclosers.filter((d: any) => `${d.year}` === category)
    }
  }

  //  search bar
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

  // filterFunds(searchTerm: string) {
  //   if (searchTerm) {
  //     this.fundsForSearch = this.funds
  //     // console.log(this.fundsForSearch)
  //     this.fundsForSearch = this.fundsForSearch.filter((fund: any) =>
  //       fund.title.toLowerCase().includes(searchTerm.toLowerCase())
  //     );
  //   } else {
  //     this.fundsForSearch = this.fullFundsArray; // Clear the filtered results when input is empty
  //   }

  // }
  filterFunds(searchTerm: string) {
    if (searchTerm.trim()) {
        this.fundsForSearch = this.funds.filter((fund: any) =>
            fund.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
    } else {
        this.fundsForSearch = []; // Reset to empty array if searchTerm is empty
    }
}


  getTableTitle(fund: any) {
    this.selectedFund = fund; // Update the selected fund variable
    this.searchTerm = this.selectedFund.title;
    const fundsArray = [...this.fullFundsArray];
    const selectedFund = fundsArray.find(fund => fund.id === this.selectedFund.id);
    this.funds = [selectedFund]
  }

  resetFundExplore() {
    this.funds = this.fullFundsArray;
    this.searchTerm = '';
  }

  // resetSearchTerm() {
  //   this.searchTerm = ''; // Reset search term to empty string
  //   this.fundsForSearch = this.fullFundsArray; // Reset filtered funds

  // }
  // resetSearchTermResetFundExplore() {
  //   this.resetFundExplore()
  //   this.resetSearchTerm()
  // }

  // scrollToBottom() {
  //   const scrollBar = document.querySelector('.scrollable-container');
  //   if (scrollBar) {
  //     scrollBar.scrollTop = scrollBar.scrollHeight; // Scrolls to the bottom
  //   }
  // }

  scrollToBottom() {
  const scrollBar = document.querySelector('.scrollable-container');
  if (scrollBar) {
    if (scrollBar.scrollTop + scrollBar.clientHeight !== scrollBar.scrollHeight) {
      scrollBar.scrollTop += 200; // Scrolls down by 200px
    } else {
      scrollBar.scrollTop = scrollBar.scrollHeight; // Scrolls to the bottom
    }
  }
}

scrollToAccodianBottom() {
  const scrollBar = document.querySelector('.main-content');
  if (scrollBar) {
    if (scrollBar.scrollTop + scrollBar.clientHeight !== scrollBar.scrollHeight) {
      scrollBar.scrollTop += 200; // Scrolls down by 200px
    } else {
      scrollBar.scrollTop = scrollBar.scrollHeight; // Scrolls to the bottom
    }
  }
}
showContentOnHover(event: any, item: any) {
  // Check if the event is a MouseEvent
  if (event instanceof MouseEvent) {
      // Remove active class from all items
      const navLinks = document.querySelectorAll('.nav-link');
      navLinks.forEach(link => {
          link.classList.remove('active');
      this.selectReportTab(item);

      });

      // Add active class to the hovered item
      const currentHoveredItem = event.target as HTMLElement;
      currentHoveredItem.classList.add('active');
  } else {
      // If the event is not a MouseEvent, assume it's a regular event and select the report tab
      console.log(item);
      document.getElementById(event.target.id)?.click();
      console.log(event.target.id);
  }
}

}
