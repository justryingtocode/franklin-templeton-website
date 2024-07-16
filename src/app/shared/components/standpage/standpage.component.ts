import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { SolutionsService } from '../../services/solutions/solutions.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface cardOptions {
  id: number;
  imageUrl: string;
  title: string;
};
@Component({
  selector: 'app-standpage',
  templateUrl: './standpage.component.html',
  styleUrls: ['./standpage.component.scss']
})
export class StandpageComponent {

  solutionsCardContent: any = [];
  slideConfig = {
    dots: false,
    infinite: false,
    arrows: true,
    prevArrow: "<button type='button' class='btn btn-outline-secondary left-arrow'><i class='bi bi-arrow-left-short'></i></button>",
    nextArrow: "<button type='button' class='btn btn-outline-secondary right-arrow'><i class='bi-arrow-right-short'></i></button>",
    centerMode: false,
    centerPadding: '15%',
    slidesToShow: 7,
    slidesToScroll: 1,
    swipeToSlide: true,
    touchThreshold: 200,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          centerPadding: '10%',
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          centerPadding: '5%',
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 2,
          centerPadding: '5%',
          slidesToScroll: 2
        }
      }
    ]
  };

  // slideConfig = {
  //   dots: false,
  //   arrows: false,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   swipeToSlide: true,
  //   touchThreshold: 200,
  //   responsive: [
     
  //     {
  //       breakpoint: 992,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 1
  //       }
  //     },
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1
  //       }
  //     }
  //   ]
  // };

  investForm: FormGroup = new FormGroup({})
  showTextArea: boolean = false;
  filedDefaullt: boolean = false
  close: any;

  constructor(private _solutionsService: SolutionsService, private router: Router,private _fb: FormBuilder) {}

  ngOnInit(): void
  {
    this.getMockFunds();
    // this.router.events.subscribe((event) => {
    //   if (!(event instanceof NavigationEnd)) {
    //     return;
    //   }
    //   window.scrollTo(0, 0)
    // });
    this.investForm = this._fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
      phone: ['', [Validators.required, Validators.maxLength(10)]],
      query: ['', Validators.required],
      // remarks: ['', [Validators.required]],
      conditionCheckbox: ['']
    })
  }

  getMockFunds = () => {
    this._solutionsService.getMockSolutionsCardData().subscribe({
      next: (result) => {
        this.solutionsCardContent = result
        // console.log(this.solutionsCardContent);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  contentData(param: cardOptions) {
    // this.router.navigate(['/solutions/content/' + param.id], { queryParams: { ...param } });
    this.router.navigateByUrl('/solutions/content/' + param.id, { state: { ...param } });
  }

  onSelect() {
    this.showTextArea = true;
  }

  checkboxCondition(event: any) {
    if (event.target.checked) {
      this.filedDefaullt = true;
    }
    else {
      this.filedDefaullt = false;
    }
  }

  submitInvestmentForm()
  {
    console.log(this.investForm.value);
  }

  blockAlphabetsAndSpecialChars(event: any) {
    const char = event.key;
    // Check if the character is a numeric digit (0-9) or Backspace
    if (!/^[0-9]$/.test(char) && char !== 'Backspace') {
      event.preventDefault(); // Prevent the input of non-numeric characters
    }
  }


  redirectToNextPage() {
    let ele = document.getElementById("goToWatchList");
    if(ele){
      ele.click();
    }
    this.router.navigate(['/watchlist']);
    this.close.emit();
  }


  
}
