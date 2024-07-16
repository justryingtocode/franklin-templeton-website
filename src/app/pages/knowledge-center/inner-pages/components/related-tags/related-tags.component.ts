import { Component } from '@angular/core';

@Component({
  selector: 'app-related-tags',
  templateUrl: './related-tags.component.html',
  styleUrls: ['./related-tags.component.scss']
})
export class RelatedTagsComponent {

  showIconForWishlist1: boolean = true;
  showIconForWatchlist1: boolean = true;
  showIconForWishlist2: boolean = true;
  showIconForWatchlist2: boolean = true;
  showTooltip: boolean = false;

  constructor() {}

  ngOninit()
  {

  }

  toggleIconForWishlist1() {
    this.showIconForWishlist1 = !this.showIconForWishlist1;
  }

  toggleIconForWatchlist1()
  {
    this.showIconForWatchlist1 = !this.showIconForWatchlist1;
  }

  toggleIconForWishlist2() {
    this.showIconForWishlist2 = !this.showIconForWishlist2;
  }

  toggleIconForWatchlist2()
  {
    this.showIconForWatchlist2 = !this.showIconForWatchlist2;
  }

  toggleTooltip()
  {
    this.showTooltip = false;
  }

}
