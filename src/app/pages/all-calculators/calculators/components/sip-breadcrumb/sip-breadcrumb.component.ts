import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-sip-breadcrumb',
  templateUrl: './sip-breadcrumb.component.html',
  styleUrls: ['./sip-breadcrumb.component.scss']
})
export class SipBreadcrumbComponent {
  
  constructor(private router: Router) { }
  goBack(): void {
    this.router.navigate(['/all-calculators']);
    console.log('clicked breadcrumb');
    
  }

}