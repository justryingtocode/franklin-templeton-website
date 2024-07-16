import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
})
export class DownloadComponent {
  constructor(@Inject(DOCUMENT) private document: Document) {}
  handleThemeModeClick = (mode: string) => {
    if(mode == 'dark') this.document.body.classList.add('page-dark-mode');
    else this.document.body.classList.remove('page-dark-mode');
  }
}
