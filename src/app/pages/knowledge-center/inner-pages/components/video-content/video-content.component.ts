import { Component } from '@angular/core';

@Component({
  selector: 'app-video-content',
  templateUrl: './video-content.component.html',
  styleUrls: ['./video-content.component.scss']
})
export class VideoContentComponent {

  showTranscript:boolean = true;
  showIconForWishlist: boolean = true;
  showIconForWatchlist: boolean = true;
  showTooltip: boolean = false;

  language = [
    { id: 'check1', label: 'English', isChecked: true },
    { id: 'check2', label: 'Hindi', isChecked: false },
    { id: 'check3', label: 'Gujrati', isChecked: false },
    { id: 'check4', label: 'Bengali', isChecked: false },
    { id: 'check5', label: 'Tamil', isChecked: false },
  ];

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

  toggleTranscript()
  {
     this.showTranscript = !this.showTranscript; 
  }

  toggleCheckbox(clickedCheckbox: { id: string, label: string, isChecked: boolean }): void {
    console.log(clickedCheckbox)
    // Uncheck all checkboxes
    this.language.forEach(checkbox => checkbox.isChecked = false);

    // Toggle the clicked checkbox
    clickedCheckbox.isChecked = true;
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
