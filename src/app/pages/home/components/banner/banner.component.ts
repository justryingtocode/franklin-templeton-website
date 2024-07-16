import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  constructor(@Inject(DOCUMENT) private document: Document) {}
  handleThemeModeClick = (mode: string) => {
    if(mode == 'dark') this.document.body.classList.add('page-dark-mode');
    else this.document.body.classList.remove('page-dark-mode');
  }
}
