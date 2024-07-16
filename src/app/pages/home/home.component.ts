import { OnInit } from '@angular/core';
import { ComparefundService } from 'src/app/shared/services/compare-fund/comparefund.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('in', style({ transform: 'translateX(0)', opacity: 1 })),
      transition(':enter', [
        style({ transform: 'translateX(100%)', opacity: 1 }),
        animate('1s ease-in-out')
      ]),
      transition(':leave', [
        animate('3s ease-in-out', style({ transform: 'translateX(100%)', opacity: 1 }))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {



  compareFundData: any = [];

  constructor(private _comparefundService: ComparefundService, private _fb: FormBuilder) {

  }

  ngOnInit(): void {
    

  }

  callHomeCompareFundApi() {
    this._comparefundService.getCompareFundHomeCardData().subscribe((res: any) => {
      this.compareFundData = res
    })
  }



  // ------------------------

  @Input() isSmall = false
  @Output() backToInvest: EventEmitter<any> = new EventEmitter();
 
  filedDefaullt: boolean = false










  checkboxCondition(event: any) {
    if (event.target.checked) {
      this.filedDefaullt = true;
    }
    else {
      this.filedDefaullt = false;
    }
  }



 



}