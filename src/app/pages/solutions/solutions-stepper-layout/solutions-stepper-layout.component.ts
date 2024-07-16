import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-solution-stepper-layout',
  templateUrl: './solutions-stepper-layout.component.html',
  styleUrls: ['./solutions-stepper-layout.component.scss']
})
export class SolutionsStepperLayoutComponent implements OnInit {
  solutionData: any;
  lastKnownScrollPosition: any;
  constructor(private activeRoute: ActivatedRoute, private location: Location) {
  }

  ngOnInit(): void {
    this.solutionData = this.location.getState();
  }
  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event: any) {
    const deltaY = window.scrollY - this.lastKnownScrollPosition;
    this.lastKnownScrollPosition = window.scrollY;
    // let menu: any = document.querySelector(".header");
    let menu: any = document.getElementById("breadcrumb")
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    if (winScroll > 70 && window.innerWidth > 520) {
      menu.classList.add("scroll-down");
    } else {
      menu.classList.remove("scroll-down");
    }
  }
  back() {
    this.location.back()
  }
}
