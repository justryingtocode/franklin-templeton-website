import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  // stars = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // rating = 0;

  selectedCategory: any = ['checking_fund_details'];
  categories: string[] = ['Checking Fund details', 'Service releted', 'Account Statement', 'Login Releted', 'Others'];

  fedBacBtn: boolean = false;

  showFeedbackForm: boolean = false;
  showThankyouForm: boolean = false;
  rating: any;
  showfunc: any;
  showRatingfunc: any;
  showThankfunc: any;
  currentValue: number = 1;

  rangeValue: number = 1;


  // new UI
  currentRatting: any;

 

  constructor(){}

  ngOnInit(): void {
    
  }

  onRangeChange(){
    console.log("Range value changed:", this.rangeValue);
  }

  toggleVisibility() {
    this.fedBacBtn = !this.fedBacBtn;
  }

  // updateRating(r: any) {
  //   this.rating = r;
  // }


  // ShowForm(isForm: boolean) {
  //   if (isForm) {
  //     this.showFeedbackForm = true;
  //   } else {
  //     this.showThankyouForm = true;
  //   }
  // }




  selectCategory(category: string): void {
    if(this.selectedCategory.includes(category)){
      let data = this.selectedCategory.filter((d: any) => d != category);
      this.selectedCategory = data;
    }else{
      this.selectedCategory.push(category);
    }
  }

  // rateStar(stars: number) {
  //   this.rating = stars;
  //   console.log(this.rating);

  //   if(this.rating == 6){
  //     this.showFeedbackForm
  //     // this.showRatingfunc = this.showFeedbackForm 
  //     // console.log(this.showRatingfunc ,'6');
      

  //   } else{
  //     this.showThankyouForm
  //   }
  //     // this.showThankfunc = this.showThankyouForm
  //     // console.log(this.showThankyouForm , '10');
      

  
  //   }

  rateStar(stars: number) {
    this.rating = stars;
    if (this.rating <= 9) {
      console.log('1',this.rating)
      this.showFeedbackForm = true;
      this.showThankyouForm = false;
    }
    else if(this.rating == 10){
      console.log('2',this.rating)
      this.showThankyouForm = true;
      this.showFeedbackForm = false;
    }
  }

  // ShowForm(isForm: boolean) {
  //   if (isForm) {
  //     this.showFeedbackForm = true;
  //   } else {
  //     this.showThankyouForm = true;
  //   }
  // }

  updateLabel(event: any) {
    this.currentValue = event.target.value;
  }

  //////// new UI
  setRatting(r: any){
    this.currentRatting = r;
  }


  submitForm(id: any){
    $(`#${id}`).addClass("show");
  }
  closeSuccessPopup(id: any){
    $(`#${id}`).removeClass("show");
    this.currentRatting = undefined;
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
  }

