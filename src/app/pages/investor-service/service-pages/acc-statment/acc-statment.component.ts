import { Component } from '@angular/core';

@Component({
  selector: 'app-acc-statment',
  templateUrl: './acc-statment.component.html',
  styleUrls: ['./acc-statment.component.scss']
})
export class AccStatmentComponent {

  // showSubscribeData: boolean = false;
  // subscribeBtn: boolean = false;
  subBtnAccState: string = '';
  // isChecked: boolean = false;
  toggleSubcribeButton: boolean = false;

  // toggleCheckbox() {
  //   this.isChecked = !this.isChecked;
  // }

  // dailyshowSub() {
  //   this.subBtnAccState = true;
  // }

  showSubBtn(option: string) {
    this.subBtnAccState = option;
    this.toggleSubcribeButton = option !== 'Daily';
}

  // subscribe() {
  //   this.subscribeBtn = true;
  // }
  // onShowSubscribe() {
  //   this.showSubscribeData = !this.showSubscribeData;
  // }

  // onReset() {
  //   this.showSubscribeData = false;
  // }

}
