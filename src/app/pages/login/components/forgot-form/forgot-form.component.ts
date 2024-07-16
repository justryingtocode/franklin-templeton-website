import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-form',
  templateUrl: './forgot-form.component.html',
  styleUrls: ['./forgot-form.component.scss']
})
export class ForgotFormComponent implements OnInit {
  distributorLogin: boolean = true;
  investorLogin: boolean = false;
  toggleDistributorLogin(){
    this.distributorLogin = !this.distributorLogin;
    this.investorLogin = !this.investorLogin
  }
  ngOnInit(): void {
    let url = window.location.href;
    console.log(url)
    if(url.indexOf('distributor') > -1){
      this.distributorLogin= false;
      this.investorLogin = true;
    }
  }
}
