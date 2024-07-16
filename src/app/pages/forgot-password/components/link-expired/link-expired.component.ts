import { Component } from '@angular/core';

@Component({
  selector: 'app-link-expired',
  templateUrl: './link-expired.component.html',
  styleUrls: ['./link-expired.component.scss']
})
export class LinkExpiredComponent {

  clickLink: boolean = true;
  resetPassword: boolean = false;

  onClick() {
    this.clickLink = false;
    this.resetPassword = true;
  }

}
