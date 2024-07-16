import { Component, HostListener, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { Location } from '@angular/common';
import { FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CalculatorService } from 'src/app/shared/services/calculator.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
})
export class StatisticsComponent implements OnInit {
  @Input() getradiaometer = false;
  @ViewChild('movetoradiometer') movetoradiometer: any;
  @ViewChild('amountSlider') amountSlider: ElementRef | undefined;
  @ViewChild('periodSlider') periodSlider: ElementRef | undefined;
  calcForm!: FormGroup;
  amount: any;
  hide1: boolean = false;
  id: string = 'top_id';
  fundDetails: any;
  isSip: boolean = true;
  isShortTitle: boolean = false;
  getLength: any;
  // id: string = 'performance-section';


  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event: any) {
    const deltaY = window.scrollY - this.lastKnownScrollPosition;
    this.lastKnownScrollPosition = window.scrollY;
    let box: any = document.querySelector(".top-part");
    let box1: any = document.querySelector(".hello");
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    const element: any = document.getElementById('page-content');
    if (window.scrollY > (element.offsetTop + element.offsetHeight)) {
  }
  let menu: any = document.getElementById("invest-now");
  let dummy: any = document.getElementById("dummy-row");

  // console.log(winScroll);
  if((winScroll>850 && window.innerWidth < 900) || (winScroll>800 && window.innerWidth>900) ) {
    menu.classList.add('invest-now-fixed')
    menu?.classList.remove('d-none');
  }
  else {
    menu?.classList.add('d-none');
    menu.classList?.remove('invest-now-fixed')
  }
    // console.log("if", deltaY, scrolled, height, winScroll);
    if ((deltaY > 0 && scrolled > 1.5)) {
      box.classList.add("scroll-down");
      box1?.classList.remove('top-1');
      // this.hide1 = true;
      // console.log("if", deltaY, scrolled);
      if (scrolled > 7) {
        setTimeout(() => {

          if(window.innerWidth < 700) {

            if (scrolled > 9) {
              box1.classList.remove('fund-header');
              // box1.classList.add('sticky-top1');
              box1?.classList.add('mobile-header-sticky');
            }
            // box.classList.add('test');
          }
          else {
            box1?.classList.remove('fund-header');
            box1?.classList.remove('sticky-top1')
            // (window.scrollY > element.offsetTop + element.offsetHeight)? '' :;
          }
        }, 100);
      }
    }
    else if (deltaY < 0 && scrolled > 1.5) {
      if(window.innerWidth >700) {
        this.hide1 = true;
        if (deltaY < 0 && scrolled > 5) box.classList.add('test');
        box.classList.remove("scroll-down");
        // console.log(scrolled, "scrolled");
        box1?.classList.add('sticky-top1');
        // box1?.classList.add('fund-header');
        // box1?.classList.add('d-none');
      }
      else {
        if (scrolled < 9) {
          // box1?.classList.remove('sticky-top1');
        }
        box1?.classList.add('top-1');

        // box1?.classList.remove('sticky-top1');
      }

    }
    //  else {
    //   this.hide1 = false;
    //   // if(!this.hide1) {
    //     box.classList.remove("scroll-down");
    //   // }
    //   if(deltaY < 0 && scrolled > 5) box.classList.add('test');

    //   // box.classList.add('test')
    //   box1.classList.remove('sticky-top1');
    //   box1.classList.add('fund-header');
    //   // console.log("else", deltaY, scrolled);
    // }
    if (deltaY < 0 && scrolled < 6) {
      box.classList.remove("test");
      // console.log(scrolled, "up");
      box1?.classList.remove('sticky-top1');
      // box1.classList.add('fund-header');
      this.hide1 = true;
    
      box1?.classList.remove('top-1');
      // box1?.classList.remove('d-none');
      // console.log("if", deltaY, scrolled);

    }

    const sections = document.querySelectorAll<any>('.fd-tab-sections');
    const navLi = document.querySelectorAll('.FT-blocks-nav ul li');
    let current = '';
    // console.log(sections, navLi);

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (pageYOffset >= (sectionTop - 85)) {
        current = section.getAttribute('id');
      }
    });

    navLi.forEach((li) => {
      current? li.children[0].classList.remove('active-item') : '';
      // li.children[0].classList.remove('active-item');
      if (li.children[0].classList.contains(current)) {
        li.children[0].classList.add('active-item');
      }
    });
  }

  lastKnownScrollPosition!: number;
  showSaveDialoge = false;
  showCopyDialoge = false;
  showCalculator = false;
  showCalcBox = false;
  hideGraph = true;

  sliderKeyName: any = {
    amount:"amount",
    period:"period",
  }

  // Calculator values
  totalInvestAmt: any = 0;
  totalReturns: any = 0;
  totalValues: any = 0;

  amountSliderStyle: any = "linear-gradient(90deg, #3769ff 0%, #e0e0e07a 0%)";
  periodSliderStyle: any = "linear-gradient(90deg, #3769ff 0%, #e0e0e07a 0%)";


  constructor(private location: Location,private _fb: FormBuilder, private _calcService: CalculatorService,private renderer: Renderer2) { }
  ngAfterViewInit(): void {
    const sliders = document.querySelectorAll('.range-slider');

    Array.prototype.forEach.call(sliders, (slider) => {
      slider.querySelector('input').addEventListener('input', (event: any) => {
        this.applyFill(event.target);
      });
      this.applyFill(slider.querySelector('input'));
    });
  }

  initForm = () => {
    this.calcForm = this._fb.group({
      [this.sliderKeyName.amount]: [500],
      [this.sliderKeyName.period]: [20],
      rate: [12]
    });
  };

  applyFill = (slider: any) => {
    const settings = {
      fill: '#3769FF',
      background: '#fff',
    };

    const percentage = (100 * (slider.value - slider.min)) / (slider.max - slider.min);

    const bg = `linear-gradient(90deg, ${settings.fill} ${percentage}%, ${settings.background} ${percentage + 0.1}%)`;
    slider.style.background = bg;
  };

  ngOnInit(): void { 
    // Init form
    this.initForm()


    // slider track color handle on form value change
    this.calcForm.valueChanges.subscribe((v) => {
      this.handleAllSliderFill();
    });
    this.onCalculatorChange();


    if(this.getradiaometer){
      setTimeout(() => {
        this.movetoradiometer.nativeElement.click()
      }, 1000);
    }
    this.fundDetails = this.location.getState();

    this.getLength = this.fundDetails?.title.length

    console.log(this.getLength)


  }


  toggleShowSavDialoge() {
    this.showSaveDialoge = !this.showSaveDialoge;
  }
  toggleShowCopyDialoge() {
    this.showCopyDialoge = !this.showCopyDialoge;
  }
  toggleShowCalcBox() {
    this.showCalcBox = !this.showCalcBox;
  }
  toggleShowCalculator(value:any) {
    console.log(value)
    if(value == 'calculatereturn')
    {
      console.log('ab1')
      if(this.getLength)
      {
        if (this.getLength> 58) {
          console.log('1')
          this.isShortTitle = true;
          console.log(this.isShortTitle)
          
          if (this.isShortTitle) {
            console.log('a')
            // Get the elements using the Renderer2 service
            const fundBlock = document.querySelector('.fund-block');
            const staticGraph = document.querySelector('#statick-graph');

            $('#fund-block-wraper').addClass("calculate-details");
      
            // Apply styles
            // this.renderer.setStyle(fundBlock, 'align-items', 'flex-start');
            // this.renderer.setStyle(fundBlock, 'max-height', '500px');
            // this.renderer.setStyle(staticGraph, 'margin-top', '0px');
          }
         
        }
        else{
          console.log('b')
          {
               // Get the elements using the Renderer2 service
               const fundBlock = document.querySelector('.fund-block');
               const staticGraph = document.querySelector('#statick-graph');
         
               $('#fund-block-wraper').addClass("calculate-details");
               // Apply styles
              //  this.renderer.setStyle(fundBlock, 'align-items', 'flex-start');
              //  this.renderer.setStyle(fundBlock, 'max-height', '370px');
              //  this.renderer.setStyle(staticGraph, 'margin-top', '-60px');
          }
        }
      }
    }
    else if( value == 'Goback')
    {
      console.log('ab2')
      if(this.getLength)
      {
        if (this.getLength> 58) {
          console.log('1')
          this.isShortTitle = true;
          console.log(this.isShortTitle)
          
          if (this.isShortTitle) {
            console.log('a')
            // Get the elements using the Renderer2 service
            const fundBlock = document.querySelector('.fund-block');
            const staticGraph = document.querySelector('#statick-graph');

            $('#fund-block-wraper').addClass("calculate-details");
      
            // // Apply styles
            // this.renderer.setStyle(fundBlock, 'align-items', 'flex-start');
            // this.renderer.setStyle(fundBlock, 'max-height', '500px');
            // this.renderer.setStyle(staticGraph, 'margin-top', '0px');
          }
         
        }
        else{
          console.log('b')
          {
               // Get the elements using the Renderer2 service
               const fundBlock = document.querySelector('.fund-block');
               const staticGraph = document.querySelector('#statick-graph');

               $('#fund-block-wraper').addClass("calculate-details");
         
               // Apply styles
              //  this.renderer.setStyle(fundBlock, 'align-items', 'flex-start');
              //  this.renderer.setStyle(fundBlock, 'max-height', '370px');
              //  this.renderer.setStyle(staticGraph, 'margin-top', '0px');
          }
        }
      }
    }
 
    this.showCalculator = !this.showCalculator;
    this.hideGraph = !this.hideGraph;

    // setTimeout(() => {
    //   if (this.showCalculator) {
    //     const sliders = document.querySelectorAll('.range-slider');
    //     // console.log(sliders);

    //     Array.prototype.forEach.call(sliders, (slider) => {
    //       slider
    //         .querySelector('input')
    //         .addEventListener('input', (event: any) => {
    //           this.applyFill(event.target);
    //         });
    //       this.applyFill(slider.querySelector('input'));
    //     });
    //   } else {
    //     const sliders = document.querySelectorAll('.range-slider');

    //     Array.prototype.forEach.call(sliders, (slider) => {
    //       slider
    //         .querySelector('input')
    //         .removeEventListener('input', (event: any) => {
    //           this.applyFill(event.target);
    //         });
    //     });
    //   }
    // }, 1);
  }
  getPotentialGains = () => {
    return this.calcForm?.value.period * this.calcForm?.value.amount;
  }
  moveToPerformance() {
    const elementToScroll = document.getElementById('performance');
    if (elementToScroll) {
      // Scroll to the element with a delay of 10 milliseconds (or any desired delay)
        elementToScroll.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest"
        });
    }
  }
  scrollToRiskometer() {
    const elementToScroll = document.getElementById('fund-riskometer');
    if (elementToScroll) {
      // Scroll to the element with a delay of 10 milliseconds (or any desired delay)
        elementToScroll.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest"
        });
    }
  }

  // onPeriodChange = (e: any) => {
  //   const value = +e?.target?.value;
  //   if (value && (value < 1 || value > 50)) {
  //     e.preventDefault();
  //     e.target.value = this.calcForm.value.period;
  //     return;
  //   }
  //   this.calcForm.controls['period'].setValue(value ?? 0);
  //   this.applyFill(this.periodSlider?.nativeElement);
  // };
  setSipLumpsumState(state: boolean) {
    this.isSip = state;
    let setAmount = this.getInputLimit(this.sliderKeyName.amount); 
    this.calcForm.controls['amount'].setValue(setAmount);
    this.onCalculatorChange();
  }

///---> calculator stats here.
// Handle slide track color
applyFillSlider = (type: any, value:any = null, slider: any=null) => {
  let element = slider;
  if(slider && slider.hasOwnProperty('first')){
    element = slider.first.nativeElement;
  }else if(slider && slider.hasOwnProperty('nativeElement')){
    element = slider.nativeElement;
  }
  
  let currentValue = value || element?.value || 0;

  const settings = {
    fill: '#3769ff',
    background: '#e0e0e07a',
  };

  let minValue: any = this.getInputLimit(type, false);
  let maxValue: any = this.getInputLimit(type, true)

  let percentage = ((currentValue - minValue)) * 100/ (maxValue - minValue);
  if(!isNaN(Number(currentValue)) && Number(currentValue) > Number(maxValue)){
    percentage = 100;
  }else if(currentValue <= 0 ){
    percentage = 0;
  }

  const bg = `linear-gradient(90deg, ${settings.fill} ${percentage}%, ${settings.background} ${percentage + 0.1}%) !important`;
  switch(type){
    case this.sliderKeyName.amount:
      this.amountSliderStyle = bg;
    break;
    case this.sliderKeyName.period:
      this.periodSliderStyle = bg;
    break;
  }
};
    handleAllSliderFill(){
      if(!this.calcForm){
        return;
      }
      for(let keyName in this.sliderKeyName) {
        let v = this.calcForm.value[keyName];
        
        if(v == undefined){
          v = this.getInputLimit(keyName);
        }
        this.applyFillSlider(keyName, v);
      }
    }  
    // Get input field min & max limit
    getInputLimit = (type: any, isMax: any= false) =>{
      let v ;
  
      const maxAmount =  this.isSip? 10e5 :1e8; 
      const minAmount =  this.isSip? 500 :1e4;
  
      const maxPeriod = 30;
      const minPeriod = 1;
  
      switch(type){
        case this.sliderKeyName.amount:
          v = isMax ? maxAmount: minAmount;
        break;
        case this.sliderKeyName.period:
          v = isMax ? maxPeriod: minPeriod;
        break;
      }
  
      return v;
    }


  onCalculatorChange = (e: any= null, type: string= "") => {
    let value: any = +e?.target?.value || null;
    const maxLimit = this.getInputLimit(type, true);
    const minLimit = this.getInputLimit(type, false);
    
    if(type && maxLimit != undefined && minLimit != undefined){
      e.preventDefault();
      let v = value;
      if (Number(value) > maxLimit) {
        v = maxLimit;
      }else if(Number(value) < minLimit ){
        v = minLimit;
      }
      this.calcForm.controls[type].patchValue(v);
    }

    //console.log("FD  => ",this.calcForm);

    // Calculator process starts here.
    let currentAmt = this.calcForm.value.amount;
    let currentPeriod = this.calcForm.value.period;
    let roiRate = this.calcForm.value.rate;
    
    if(!currentAmt || !currentPeriod){
      return;
    }

    if(this.isSip){

      let {
        totalInvestAmt,
        totalValues,
        totalReturns
      } = this._calcService.monthly_sip(
          currentAmt,
          currentPeriod,
          roiRate
      );
      this.totalInvestAmt = totalInvestAmt;
      this.totalValues = totalValues;
      this.totalReturns = totalReturns;
    }else{
      
      let {
        totalInvestAmt,
        totalValues,
        totalReturns
      } = this._calcService.get_lumpsum(
          currentAmt,
          currentPeriod,
          roiRate
      );
      this.totalInvestAmt = totalInvestAmt;
      this.totalValues = totalValues;
      this.totalReturns = totalReturns;

    }



  };


}
