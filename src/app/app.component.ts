
import { Component, OnInit } from '@angular/core';

// Services
import { CommonService } from './shared/services/common.service';

// Router
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  currentUrlPath: any='';
  constructor(private commonService: CommonService, private router: Router){

    // handling on each routing.
    router.events.subscribe((val: any) => {
      if(this.currentUrlPath != val?.url){
        this.currentUrlPath = val.url;
        $(`ul.auto-close-menu > li > a.dropdown-toggle`).attr("aria-expanded","false");
        $(`ul.auto-close-menu > li > a.dropdown-toggle`).removeClass('show');
        $(`ul.auto-close-menu > li > div.dropdown-menu`).removeClass('show');
      }
    });

  }


  title = 'ft-fronend';


  ngOnInit(): void{

    // preset current font size.
    this.commonService.setFontResize();

    // preset current dark mode
    this.commonService.setDarkmode();



  }
  showCart=false;
  toggleCart(){
    this.showCart = !this.showCart
  }


  // $('body,p,div,h1,h2,h3,h4,span,a').css("font-size",'98%');
}
