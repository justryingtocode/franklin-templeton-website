import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../../services/common.service';
import { DatasharingService } from '../../services/datasharing.service';

@Component({
  selector: 'app-fund-card2',
  templateUrl: './fund-card2.component.html',
  styleUrls: ['./fund-card2.component.scss']
})
export class FundCard2Component {
  @Input() fund: any;
  @Input() changeName = true;
  @Input() toggletitile = true;
  @Input() comaprecard = true; 
  @Output() compareToggleChanged = new EventEmitter<any>();
  showCartSaveDialoge: boolean = false;
  showSaveDialoge = false;
  showCopyDialoge = false;
  makeToggle: boolean = true;
  showCart: boolean = false;
  compareToggle:any;
  cartObjDetails: any;
  constructor(private _router: Router, private commonService: CommonService, private dataSharingService: DatasharingService) {}
  toggleShowSavDialoge(fund:any) {
    this.showSaveDialoge = !this.showSaveDialoge;
    console.log(fund);
    this.dataSharingService.setSharedData(fund);
    // document.getElementById('forRoute')?.click();
  }
  toggleShowSavDialoge1()
  {
    this.showSaveDialoge = !this.showSaveDialoge;
  }
  toggleShowCopyDialoge() {
    this.showCopyDialoge = !this.showCopyDialoge;
  }
  routeModuleCompareFund(id: any) {
    this._router.navigate([`/compare-fund/${id}`]);
  }
  //  routeModuleCompareFund() {
  //   this._router.navigate([`/compare-fund/`]);
  // }

  @HostListener('click', ['$event'])
  onClickDateRangePicker(event: Event) {
    if (this.showCart) {
      if ((event.target as Element).className == 'FT-general-filter cart-aside show') this.showCart = false;
    }
  }  
  getCheckboxValue(event:any) {
  }

  card()
  {

  }
  toggleGroup(value:any)
  {
    if(value === 'SIP Investment')
    {
      this.makeToggle = true;
    }else if(value === 'Lumpsum Investment')
    {
      this.makeToggle = false;
    }
    else
    {
      this.makeToggle = true;
    }
  }

  contentOnHoverCLose(param: any) {
    document.getElementById(param)?.click();
  }
  //   toggleShowSavDialoge1() {
  //   // this.showCartSaveDialoge = !this.showCartSaveDialoge;
  // }
  fundDetails(param: any) {
    this._router.navigateByUrl('/funds/' + param.id, { state: { ...param } });
  }

  getdata(Compare: any) {
    this.compareToggle = Compare;
    this.compareToggleChanged.emit(this.compareToggle);
  }

  
  addedCartDetails(event: any) {
    this.showCart = false;
    this.commonService.setCartChange(event);
  }

  // goToDataPage(fund: any) {
  //   console.log(fund);
  //   this.dataSharingService.setSharedData(fund);
  //   document.getElementById('forRoute')?.click();
  //   // sessionStorage.setItem('datacard', JSON.stringify(fund))
  //   // this._router.navigateByUrl('watchlist', { state: { ...fund } });
  // }

}
