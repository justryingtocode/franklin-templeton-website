import { AfterViewInit, Component, ElementRef, EventEmitter, HostListener, Input, OnChanges, OnInit, Output, QueryList, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
export interface stepper {
  id: number,
  hasTraversed: boolean
}
@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss']
})
export class StepsComponent implements OnInit, AfterViewInit {
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
    ,
    {
      "id": 4,
      "hasTraversed": false
    },
    {
      "id": 5,
      "hasTraversed": false
    }
    ,
    {
      "id": 6,
      "hasTraversed": false
    }
    ,
    {
      "id": 7,
      "hasTraversed": false
    }
  ];
  allFunds: any = []
  @Input() contentData: any;
  lastKnownScrollPosition: number = 0;
  planDetailsForm!: FormGroup;
  initialFormValue: any;
  showCalculatedGoalAmt: boolean = false;
  showclass: boolean = false;
  showEmpanelForm : boolean = false;
  constructor(private _fb: FormBuilder, private router: Router) {
    window.scrollTo(0, 0);
   }


  ngOnInit(): void {
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
    // window.scrollTo(0, 0);
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

toggleEmpanelForm(){
  this.showEmpanelForm = !this.showEmpanelForm;
}

}

