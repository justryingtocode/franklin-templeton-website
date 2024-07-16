import { Component } from '@angular/core';

@Component({
  selector: 'app-article-content',
  templateUrl: './article-content.component.html',
  styleUrls: ['./article-content.component.scss']
})
export class ArticleContentComponent {

  showIconForWishlist: boolean = true;
  showIconForWatchlist: boolean = true;
  showTooltip: boolean = false;

  constructor() {}

  ngOnit()
  {

  }

  moveToRelatedTag() {
    const elementToScroll = document.getElementById('related_tag');
    if (elementToScroll) {
      // Scroll to the element with a delay of 10 milliseconds (or any desired delay)
        elementToScroll.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest"
        });
    }
  }

  toggleIconForWishlist() {
    this.showIconForWishlist = !this.showIconForWishlist;
  }

  toggleIconForWatchlist()
  {
    this.showIconForWatchlist = !this.showIconForWatchlist;
  }

  toggleTooltip()
  {
    this.showTooltip = false;
  }

}
