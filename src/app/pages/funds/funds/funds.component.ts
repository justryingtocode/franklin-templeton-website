import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-funds',
  templateUrl: './funds.component.html',
  styleUrls: ['./funds.component.scss']
})
export class FundsComponent {

  investButn:boolean = false;

  radiometer:any;

  constructor(private route: ActivatedRoute, private location:Location) { }

  ngOnit()
  {
    this.radiometer = this.location.getState();
    console.log('1',this.radiometer)
  }

}
