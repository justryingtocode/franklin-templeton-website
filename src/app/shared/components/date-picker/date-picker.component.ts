import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgbPopover } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit {
  @Output() dateSelected: EventEmitter<any> = new EventEmitter();
  @Output() Showingperformance: EventEmitter<any> = new EventEmitter();
  @Input() selectedDate: any;
  @Input() fixStyling: any;
  dateIsSelected: boolean = false;
  isSelectedDateEmpty: boolean = false;
  selectedMonth: any = '';
  selectedYear: any;
  @ViewChild('popContent') public popContent: any;
  @ViewChild('popOver') public popover!: NgbPopover;
  showShowingperformance: boolean = false
  ngOnInit(): void {
    if (this.selectedDate != 'From' || this.selectedDate != 'To') {
      this.isSelectedDateEmpty = false;
      const me = this.selectedDate?.split(" ");
      if (me) {
        this.selectedMonth = me[0];
        this.selectedYear = me[1];
      }
    }
    else {
      this.isSelectedDateEmpty = true;
    }
  }
  constructor() { }

  monthList: Array<string> = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
  yearList: Array<number> = [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023];

  DateSelected() {
    console.log(this.selectedMonth, this.selectedYear);
    //  this.selectedDate = '';
    this.dateIsSelected = true;
    this.selectedDate = ( this.selectedMonth ? this.selectedMonth : '' ) + ' ' + ( this.selectedYear ? this.selectedYear : '');
    // this.dateSelected.emit(this.selectedDate)
    this.Showingperformance.emit(this.showShowingperformance)   
    this.popover.close();
  }  
  selectMonth(param: any) {
    this.selectedMonth = param.target? param.target.value: param;
    const accordion = document.getElementById('monthButton');
    if (accordion) {
      const clickEvent = new Event('click');
      accordion.dispatchEvent(clickEvent);
    }
  }
  selectDay(param: any) {
    this.selectedYear = param.target? param.target.value: param;;
    const accordion = document.getElementById('yearButton');
    if (accordion) {
      const clickEvent = new Event('click');
      accordion.dispatchEvent(clickEvent);
    }
  }
}
