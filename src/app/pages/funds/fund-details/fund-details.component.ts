import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-fund-details',
  templateUrl: './fund-details.component.html',
  styleUrls: ['./fund-details.component.scss']
})
export class FundDetailsComponent {

radiometer:any;
getradio:boolean = false;

  constructor(private location:Location) { }

  ngOnInit(): void { 
    
    this.radiometer = this.location.getState();

    console.log('1',this.radiometer.get)

    if(this.radiometer.get == 'radiometer')
    {
      this.getradio = true
      console.log('2')
    }
  }

}
