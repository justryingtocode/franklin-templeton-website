import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fund-card3',
  templateUrl: './fund-card3.component.html',
  styleUrls: ['./fund-card3.component.scss']
})
export class FundCard3Component {
  @Input() fund: any

  showSaveDialoge = false;
  showCopyDialoge = false;
  makeToggle: boolean = true;
  constructor(private _router: Router) { }
  toggleShowSavDialoge() {
    this.showSaveDialoge = !this.showSaveDialoge;
  }
  toggleShowCopyDialoge() {
    this.showCopyDialoge = !this.showCopyDialoge;
  }
  routeModuleCompareFund() {
    this._router.navigate([`/watchlist-fund`]);
  }

  getCheckboxValue(event: any) {

  }

  card() {

  }
  toggleGroup(value: any) {
    if (value === 'SIP Investment') {
      this.makeToggle = true;
    } else if (value === 'Lumpsum Investment') {
      this.makeToggle = false;
    }
    else {
      this.makeToggle = true;
    }
  }

  contentOnHoverCLose(param: any) {
    document.getElementById(param)?.click();
  }
}
