import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  scrollTo(param: any) {
    const elementToScroll = document.getElementById(param);
    if (elementToScroll) {
      // Scroll to the element with a delay of 10 milliseconds (or any desired delay)
        elementToScroll.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest"
        });
    }
  }
  
}
