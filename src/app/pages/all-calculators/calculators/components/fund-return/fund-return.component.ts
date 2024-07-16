import { AfterViewInit,Component,EventEmitter,OnInit, Output } from '@angular/core';
import { FundService } from 'src/app/shared/services/fund.service';
@Component({
  selector: 'app-fund-return',
  templateUrl: './fund-return.component.html',
  styleUrls: ['./fund-return.component.scss']
})
export class FundReturnComponent implements OnInit{
  funds: any = [] // please maintain model don't use any 

  @Output() addFundStatusChanged: EventEmitter<boolean> = new EventEmitter<boolean>();
  
  showSaveDialoge = false;
  showCopyDialoge = false;
  showAdvanceFilter = false;
  showMoreOptions = false;
  hideOptionSearch= true;
  showFilterBox = false;
  showAllFunds=false;
  hideTitle=true;
  showAddFund:boolean=false;
  allFunds: Array<number> = [];
  constructor(private _fundServices: FundService) {
    this.allFunds = Array(3).fill(1).map((x,i)=>i);
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
  toggleShowAllFunds() {
    // this.showAllFunds = !this.showAllFunds;
    // this.hideTitle = !this.hideTitle;
    document.body.style.overflow = 'unset';
    document.body.style.padding = 'unset';

  }
  getMockFunds = () => {
    this._fundServices.getMockFundsData().subscribe({
      next: (result) => {
        this.funds = result
        // console.log(this.funds);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  toggleAddFund()
  {
    this.showAddFund = true;
    this.addFundStatusChanged.emit(this.showAddFund); 
  }

}
