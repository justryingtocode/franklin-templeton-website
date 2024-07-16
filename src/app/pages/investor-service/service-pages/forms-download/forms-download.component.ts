import { Component, HostListener } from '@angular/core';
import { FundService } from 'src/app/shared/services/fund.service';

@Component({
  selector: 'app-forms-download',
  templateUrl: './forms-download.component.html',
  styleUrls: ['./forms-download.component.scss']
})
export class FormsDownloadComponent {

  selecteReportTab: any = {}
  selectedCategory: string = '';
  categories: string[] = [];
  selectedCategoryData: any[] = []

  selectedMenuName: string = "";

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
    this.selectReportTab(this.dataArray[0])
    this.getMockFunds();
  }

  dataArray: any = [
    {
      "menu-title": "Forms for Investor",
      "disclosers": [
        {
          "subName": "Equity Fund",
          "title": "Lorem ipsum dolor sit amet.1"
        },
        {
          "subName": "Debt Fund",
          "title": "Lorem ipsum dolor sit amet.2"
        },
        {
          "subName": "Hybrid Fund",
          "title": "Lorem ipsum dolor sit amet.3"
        },
        {
          "subName": "Index Funds",
          "title": "Lorem ipsum dolor sit amet.4"
        },
        {
          "subName": "ETFs",
          "title": "Lorem ipsum dolor sit amet.5"
        },
        {
          "subName": "lorem7",
          "title": "Lorem ipsum dolor sit amet.5"
        },
        {
          "subName": "lorem6",
          "title": "Lorem ipsum dolor sit amet.5"
        },
        {
          "subName": "lorem5",
          "title": "Lorem ipsum dolor sit amet.5"
        },
        {
          "subName": "lorem3",
          "title": "Lorem ipsum dolor sit amet.5"
        },
        {
          "subName": "lorem2",
          "title": "Lorem ipsum dolor sit amet.5"
        },
        {
          "subName": "lorem1",
          "title": "Lorem ipsum dolor sit amet.5"
        },

      ]
    },
    {
      "menu-title": "Forms for Distibutors",
      "disclosers": [
        {
          "subName": "Debt Fund",
          "title": "Lorem ipsum dolor sit amet"
        },
        {
          "subName": "Debt Fund",
          "title": "Lorem ipsum dolor sit amet.2"
        },
        {
          "subName": "Hybrid Fund",
          "title": "Lorem ipsum dolor sit amet.3"
        },
        {
          "subName": "Index Funds",
          "title": "Lorem ipsum dolor sit amet.4"
        },
        {
          "subName": "ETFs",
          "title": "Lorem ipsum dolor sit amet.5"
        },
      ]
    },
    {
      "menu-title": "KIM and Application forms",
      "disclosers": [
        {
          "subName": "Hybrid Fund",
          "title": "Nomination Form"
        },
        {
          "subName": "Debt Fund",
          "title": "Lorem ipsum dolor sit amet.2"
        },
        {
          "subName": "Hybrid Fund",
          "title": "Lorem ipsum dolor sit amet.3"
        },
        {
          "subName": "Index Funds",
          "title": "Lorem ipsum dolor sit amet.4"
        },
        {
          "subName": "ETFs",
          "title": "Lorem ipsum dolor sit amet.5"
        },
      ]
    },
    {
      "menu-title": "Change of Address",
      "disclosers": [
        {
          "subName": "Index Funds",
          "title": "Nomination Form"
        },
        {
          "subName": "Equity Fund",
          "title": "Lorem ipsum dolor sit amet.1"
        },
        {
          "subName": "Debt Fund",
          "title": "Lorem ipsum dolor sit amet.2"
        },
        {
          "subName": "Hybrid Fund",
          "title": "Lorem ipsum dolor sit amet.3"
        },
        {
          "subName": "Index Funds",
          "title": "Lorem ipsum dolor sit amet.4"
        },
        {
          "subName": "ETFs",
          "title": "Lorem ipsum dolor sit amet.5"
        },
      ]
    },
    {
      "menu-title": "Change of Bank",

      "disclosers": [
        {
          "subName": "ETFs",
          "title": "Nomination Form"
        },
        {
          "subName": "Equity Fund",
          "title": "Lorem ipsum dolor sit amet.1"
        },
        {
          "subName": "Debt Fund",
          "title": "Lorem ipsum dolor sit amet.2"
        },
        {
          "subName": "Hybrid Fund",
          "title": "Lorem ipsum dolor sit amet.3"
        },
        {
          "subName": "Index Funds",
          "title": "Lorem ipsum dolor sit amet.4"
        },
        {
          "subName": "ETFs",
          "title": "Lorem ipsum dolor sit amet.5"
        },

      ]
    },
    {
      "menu-title": "Consolidation of Folios",

      "disclosers": [
        {
          "subName": "ETFs",
          "title": "Nomination Form"
        },
        {
          "subName": "Equity Fund",
          "title": "Lorem ipsum dolor sit amet.1"
        },
        {
          "subName": "Debt Fund",
          "title": "Lorem ipsum dolor sit amet.2"
        },
        {
          "subName": "Hybrid Fund",
          "title": "Lorem ipsum dolor sit amet.3"
        },
        {
          "subName": "Index Funds",
          "title": "Lorem ipsum dolor sit amet.4"
        },
        {
          "subName": "ETFs",
          "title": "Lorem ipsum dolor sit amet.5"
        },

      ]
    },
    {
      "menu-title": "Appointment of Nominee",

      "disclosers": [
        {
          "subName": "ETFs",
          "title": "Nomination Form"
        },
        {
          "subName": "Index Funds",
          "title": "Lorem ipsum dolor sit amet.4"
        },
        {
          "subName": "ETFs",
          "title": "Lorem ipsum dolor sit amet.5"
        },

      ]
    },
    {
      "menu-title": "Change of Name",

      "disclosers": [
        {
          "subName": "ETFs",
          "title": "Nomination Form"
        },
        {
          "subName": "Index Funds",
          "title": "Lorem ipsum dolor sit amet.4"
        },
        {
          "subName": "ETFs",
          "title": "Lorem ipsum dolor sit amet.5"
        },

      ]
    },
    {
      "menu-title": "Fund Instruction",

      "disclosers": [
        {
          "subName": "ETFs",
          "title": "Nomination Form"
        },
        {
          "subName": "Index Funds",
          "title": "Lorem ipsum dolor sit amet.4"
        },
        {
          "subName": "ETFs",
          "title": "Lorem ipsum dolor sit amet.5"
        },

      ]
    },
    {
      "menu-title": "Fund Document",

      "disclosers": [
        {
          "subName": "ETFs",
          "title": "Nomination Form"
        },
        {
          "subName": "Index Funds",
          "title": "Lorem ipsum dolor sit amet.4"
        },
        {
          "subName": "ETFs",
          "title": "Lorem ipsum dolor sit amet.5"
        },

      ]
    },
    {
      "menu-title": "Fund Literature",

      "disclosers": [
        {
          "subName": "ETFs",
          "title": "Nomination Form"
        },
        {
          "subName": "Index Funds",
          "title": "Lorem ipsum dolor sit amet.4"
        },
        {
          "subName": "ETFs",
          "title": "Lorem ipsum dolor sit amet.5"
        },

      ]
    }

  ]


  selectReportTab(tab: any): void {
    // debugger;
    this.selectedMenuName = tab['menu-title'];
    console.log("selected report tab", tab);
    this.selecteReportTab = tab;

    const tabCategories: any[] = ['All'];

    tab.disclosers.forEach((t: any) => {
      if (!tabCategories.includes(`${t.subName}`)) {
        tabCategories.push(`${t.subName}`)
      }
    })

    this.categories = tabCategories

    this.selectCategory('All')
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
      this.selectedCategoryData = this.selecteReportTab.disclosers.filter((d: any) => `${d.subName}` === category)
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
      // console.log(item);
      document.getElementById(event.target.id)?.click();
      console.log(event.target.id);
    }
  }

}


