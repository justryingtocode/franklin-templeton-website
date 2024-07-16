import {AfterViewInit, Component,EventEmitter,OnInit, Output } from '@angular/core';
import { FundService } from 'src/app/shared/services/fund.service';

@Component({
  selector: 'app-add-fund',
  templateUrl: './add-fund.component.html',
  styleUrls: ['./add-fund.component.scss']
})
export class AddFundComponent {

  funds: any = [] // please maintain model don't use any 
  
  showSaveDialoge = false;
  showCopyDialoge = false;
  showAdvanceFilter = false;
  showMoreOptions = false;
  hideOptionSearch= true;
  showFilterBox = false;
  compareToggleChangedDataValueCard:any
  @Output() compareToggleChangedCard = new EventEmitter<any>();
  allFunds: Array<number> = [];

  constructor(private _fundServices: FundService) {
    this.allFunds = Array(10).fill(1).map((x,i)=>i);
  }
  ngAfterViewInit(): void {
    const sliders = document.querySelectorAll('.range-slider');
    
    Array.prototype.forEach.call(sliders, (slider) => {
      
      slider.querySelector('input').addEventListener('input', (event: any) => {
        this.applyFill(event.target);
      });
      this.applyFill(slider.querySelector('input'));
    });

  }

  applyFill = (slider: any) => {
    
    const settings = {
      fill: '#3769FF',
      background: 'rgba(224,224,224, 0.48)',
    };
    const percentage =
      (100 * (slider.value - slider.min)) / (slider.max - slider.min);
    const bg = `linear-gradient(90deg, ${settings.fill} ${percentage}%, ${
      settings.background
    } ${percentage + 0.1}%)`;
    slider.style.background = bg;
  };
  ngOnInit(): void {
    this.getMockFunds()
  }
  toggleShowSavDialoge() {
    this.showSaveDialoge = !this.showSaveDialoge;
  }
  toggleShowCopyDialoge() {
    this.showCopyDialoge = !this.showCopyDialoge;
  }
  toggleAdvanceFilter(){
    this.showAdvanceFilter = !this.showAdvanceFilter;
  }
  toggleMoreOptions(){
    this.showMoreOptions = !this.showMoreOptions;
    this.hideOptionSearch = !this.hideOptionSearch
  }
  toggleShowFilterBox(){
    this.showFilterBox=!this.showFilterBox;
  }
  getMockFunds = () => {
    this._fundServices.getMockFundsData().subscribe({
      next: (result) => {
        this.funds = result
        console.log(this.funds);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  onCompareToggleChangedDataValueCard(compareToggleData:any)
  {
    this.compareToggleChangedDataValueCard = compareToggleData;
    this.compareToggleChangedCard.emit(this.compareToggleChangedDataValueCard);
  }

}
