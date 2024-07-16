import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calculators',
  templateUrl: './calculators.component.html',
  styleUrls: ['./calculators.component.scss']
})
export class CalculatorsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    // this.goBackk()
  }

  goBackk(): void {
    this.router.navigate(['']);
    console.log('clicked calculator');
    
  }

}
