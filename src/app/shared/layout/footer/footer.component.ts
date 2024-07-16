import { Component, HostListener, OnInit } from '@angular/core';
import { FundService } from '../../services/fund.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  showContactBox = false;
  showContactForm = false;
  showContactBoxInner = true;
  footerContent: any;
  isMobileView: boolean = true;
  constructor(private _fundServices: FundService) { }

  ngOnInit() {
    this.getMockFooterData();
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event: any) {
    if (window.innerWidth < 700) {
      this.isMobileView = true;
    }
    else {
      this.isMobileView = false;
    }
  }
  toggleShowContactBox = () => {
    this.showContactBox = !this.showContactBox;
  };
  toggleShowContactForm = () => {
    this.showContactBoxInner = !this.showContactBoxInner;
    this.showContactForm = !this.showContactForm;
  };
  scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  getMockFooterData = () => {
    this._fundServices.getMockFooterData().subscribe({
      next: (result) => {
        this.footerContent = result
        // console.log(this.footerContent);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
