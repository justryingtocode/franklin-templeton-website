import { AfterViewInit, Component, ElementRef, EventEmitter, HostListener, Input, OnChanges, OnInit, Output, QueryList, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { ChartData, ChartOptions } from 'chart.js';

export interface stepper {
  id: number,
  hasTraversed: boolean
}

const PAGE_CONTENT = [
  {
    title: "Child’s Education",
    content: "Child education planning is a must because it ensures your little ones have the financial support they need for a quality education. With costs on the rise, planning ahead helps you tackle educational expenses without stress. It's like laying a solid foundation for their academic journey, ensuring they have the resources for everything from school to college. Plus, it's a smart way to invest, tailored to your preferences, and grows over time. So, why wait? Start planning today to make sure your kids have the bright future they deserve!"
  },
  {
    title: "Retirement",
    content: "Retirement planning is essential because it's like giving your future self a financial hug. Life after work should be about enjoying, not worrying. Planning ahead ensures you've got the funds to kick back, explore, and savor the good stuff without stressing about bills. It's like securing a ticket to a worry-free and fulfilling retirement journey. So, why wait? Start planning today and give your future self the peace of mind they deserve."
  },
  {
    title: "Holiday",
    content: "Holiday planning is a game-changer because it turns dreams of the perfect getaway into a reality. Instead of just hoping for a break, planning ensures you're prepared to pack those bags and escape. It's like creating a roadmap for adventure, making sure you have the time, budget, and the perfect destination to recharge and make memories. So, why not make your dream holiday a plan? Start plotting your next escape – your future self will thank you for the unforgettable experiences!"
  },
  {
    title: "Cash Management",
    content: "Cash management planning is your financial GPS for smooth sailing through life's twists and turns. Ever wish you had a magic wand for unexpected expenses or big dreams? Well, this is it. It's about making sure your money is in the right places at the right times – ready for emergencies, opportunities, or that spontaneous weekend getaway. Think of it as your personal financial superhero, ensuring your cash is always working for you.  So, why not make cash management planning your financial co-pilot? It's the key to smoother financial sailing and a stress-free journey."
  },
  {
    title: "Dream Home",
    content: "Dream home planning is your ticket to turning those Pinterest-worthy visions into a tangible reality. It's like sketching the blueprint for your happily-ever-after space. Planning ahead ensures that your dream home isn't just a wishful thought but a well-thought-out goal. It's about making sure you have the funds to pick the perfect paint and create a space that truly feels like home. So, why not kickstart your dream home plan today? Let's embark on the exciting journey of turning your house dreams into a living, breathing sanctuary!"
  },
  {
    title: "Wealth Creation",
    content: "Wealth creation planning is the compass guiding you to financial freedom. It's like having a roadmap for your money, ensuring it works as hard as you do. Planning ahead means you're not just earning; you're strategically growing your wealth, opening doors to opportunities and the lifestyle you desire. It's about making your money work for you, so you can live life on your terms. So, why wait? Kickstart your wealth creation plan today, and let's pave the way to a prosperous tomorrow!"
  },
  {
    title: "Tax Planning",
    content: "Tax planning is your ticket to keeping more of your hard-earned money where it belongs – in your pocket. It's like having a financial strategy that puts you in control, ensuring you don't pay more taxes than necessary. Planning ahead means finding the smart loopholes, deductions, and credits that work in your favor. It's about making the taxman your ally, not your adversary. So, why not make tax planning your financial superhero? Start today, and let's ensure you keep more of what you earn!"
  },
  {
    title: "Customize Plan",
    content: "Customizing your plan is like tailoring a suit – it ensures a perfect fit for your unique financial journey. One-size-fits-all approaches? Not for you. Planning should be as individual as your fingerprint, adapting to your goals, preferences, and quirks. It's about crafting a roadmap that aligns with your dreams and aspirations. So why settle for generic when you can have a plan as unique as you are? Dive into customization today, and let's design a financial strategy that's exclusively yours!"
  }
]
@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit, AfterViewInit {
  @ViewChild('age1') public age1: any;
  @ViewChild('ageInput') ageInput: ElementRef | undefined;
  @ViewChild('retirementAgeLeftInput') retirementAgeLeftInput: ElementRef | undefined;
  @ViewChild('retirementAmountInput') retirementAmountInput: ElementRef | undefined;
  @ViewChild('equityRiskPercentageInput') equityRiskPercentageInput: ElementRef | undefined;
  @ViewChild('inflationRateInput') inflationRateInput: ElementRef | undefined;

  stepperArray: Array<stepper> = [     // This is to check whether we have passed a particular stepper step.
    {
      "id": 1,
      "hasTraversed": false
    },
    {
      "id": 2,
      "hasTraversed": false
    },
    {
      "id": 3,
      "hasTraversed": false
    }
  ];


  allFunds: any = [];
  @Input() contentData: any;
  solutionContent: any = "";

  lastKnownScrollPosition: number = 0;
  planDetailsForm!: FormGroup;
  initialFormValue: any;
  showCalculatedGoalAmt: boolean = false;
  showclass: boolean = false;
  constructor(private _fb: FormBuilder, private router: Router) {
    window.scrollTo(0, 0);
   }


  ngOnInit(): void {

    let selectedSolutions = PAGE_CONTENT.find( (e:any) => e.title == this.contentData?.title);
    this.solutionContent = selectedSolutions?.content
    if(!this.solutionContent){
      this.solutionContent = PAGE_CONTENT[0].content;
    }
    
    this.initForm();
    // this.formChange.emit(this.investmentCalcForm?.value);
    // this.investmentCalcForm.valueChanges.subscribe((v) => {
    //   this.formChange.emit(this.investmentCalcForm?.value);
    // });
    this.planDetailsForm.valueChanges.subscribe((v) => {
      if (v?.retirementAgeLeft > 5 && v?.age > 20) {
        let rangeInput = v?.equityRiskPercentage;
        const allowedValues: number[] = [0, 25, 65, 100];
        const currentValue: number = parseInt(rangeInput);

        if (!allowedValues.includes(currentValue)) {
          const closestValue: number = allowedValues.reduce((prev, curr) =>
            Math.abs(curr - currentValue) < Math.abs(prev - currentValue) ? curr : prev
          );
          v.equityRiskPercentage = Number(closestValue.toString());
          this.applyFillSlider(this.equityRiskPercentageInput, Number(closestValue.toString()));
        }
        console.log(v);
      }
      if (this.planDetailsForm.valid) this.showCalculatedGoalAmt = true;
      else this.showCalculatedGoalAmt = false;
    });
  }

  ngAfterViewInit(): void {
    const sliders = document.querySelectorAll('.range-slider');
    Array.prototype.forEach.call(sliders, (slider) => {
      slider.querySelector('input').addEventListener('input', (event: any) => {
        this.applyFill(event.target);
      });
      this.applyFill(slider.querySelector('input'));
    });
    sessionStorage.setItem('stepperState', JSON.stringify(this.stepperArray));
  }
  initForm = () => {
    this.planDetailsForm = this._fb.group({
      name: ['', Validators.required],
      age: [null, [Validators.required, Validators.min(20)]],
      retirementAgeLeft: [null, Validators.required],
      retirementAmount: [null, [Validators.required, Validators.min(100000)]],
      equityRiskPercentage: [0],
      inflationRate: [null, Validators.required],
    });
  };
  get _planDetailsForm() {
    return this.planDetailsForm.controls;
  }
  applyFill = (slider: any) => {
    const settings = {
      fill: '#8CA9FF',
      background: 'rgba(234, 236, 240, 0.48)',
    };
    const formControlName = slider.getAttribute('formControlName');
    if (this.planDetailsForm.value[formControlName] == null) {
      slider.value = 0;
    }
    const percentage =
      (100 * (slider.value - slider.min)) / (slider.max - slider.min);
    const bg = `linear-gradient(90deg, ${settings.fill} ${percentage}%, ${settings.background
      } ${percentage + 0.1}%)`;
    slider.style.background = bg;
  };

  changeActiveStepper(id: number) {
    const selectedItem: any = this.stepperArray.find((e: { id: number; hasTraversed: boolean; }) => e.id === id);
    selectedItem.hasTraversed = true;
    this.initialFormValue = this.planDetailsForm.value;
    sessionStorage.setItem('stepperState', JSON.stringify(this.stepperArray));
  }
  // Hostlistener function to make stepper header sticky
  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event: any) {
    const appHeader: any = document.querySelector("app-header");
    const appHeader2: any = appHeader.querySelector("header");

    // Get the height of the <app-header> element
    const headerHeight = appHeader2.offsetHeight;
    const headerClasses = appHeader2.classList;
    // Now, you can use the 'headerHeight' value as needed
    // console.log("Header Height:", headerClasses);

    const deltaY = window.scrollY - this.lastKnownScrollPosition;
    this.lastKnownScrollPosition = window.scrollY;
    // let menu: any = document.querySelector(".header");
    let menu: any = document.getElementById("stepHeader");
    // console.log(document.body)
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    if (winScroll > 70 && window.innerWidth > 520) {
      menu.classList.add("scroll-down");
      this.showclass = true;
    } else {
      this.showclass = false;
      menu.classList.remove("scroll-down");
    }
  }
  backTosteps(event: Event) {
    const stepper: any = sessionStorage.getItem('stepperState')
    this.stepperArray = JSON.parse(stepper);
    this.allFunds = event;
    window.scrollTo(0, 0);
  }
  backTostep2(event: Event) {
    const stepper: any = sessionStorage.getItem('stepperState')
    this.stepperArray = JSON.parse(stepper);
    window.scrollTo(0, 0);
  }

  applyFillSlider = (slider: any, value:any = null) => {
    
    let element = slider;
    if(!element.value){
      element = slider.nativeElement;
    }
    let currentValue = value || element.value;
    
    const settings = {
      fill: '#8ca9ff',
      background: '#eaecf07a',
    };

    // let percentage = (100 * (element.value - element.min)) / (element.max - element.min);
    let percentage = ((currentValue - element.min)) * 100/ (element.max - element.min);
    if(!isNaN(Number(currentValue)) && Number(currentValue) > Number(element.max)){
      percentage = 100;
    }else if(currentValue <= 0 ){
      percentage = 0;
    }

    const bg = `linear-gradient(90deg, ${settings.fill} ${percentage}%, ${settings.background} ${percentage + 0.1}%)`;
    element.style.background = bg;
  };

  onEarningChange = (e: any, formControl: string, max: any) => {
    const value = +e?.target?.value;
    
    

    
    this.planDetailsForm.controls[formControl].setValue(value);

    let element;
    switch(formControl){
      case "age":
        element = this.ageInput;
        break;
      case "retirementAgeLeft":
        element = this.retirementAgeLeftInput;
        break;
      case "retirementAmount":
        element = this.retirementAmountInput;
        break;
      case "inflationRate":
        element = this.inflationRateInput;
        break;
      }

      this.applyFillSlider(element);
      if (value > Number(max)) {
        // e.preventDefault();
        e.target.value = Number(max);
        this.planDetailsForm.controls[formControl].setValue(e.target.value);
    
    
        return;
      }
      // let video = this.age1.nativeElement;
      // console.log(this.age1['nativeElement']);
      // this.applyFill(video);
      // }
  };



}
