import { Component } from '@angular/core';

@Component({
  selector: 'app-knowledge-center-modal',
  templateUrl: './knowledge-center-modal.component.html',
  styleUrls: ['./knowledge-center-modal.component.scss']
})
export class KnowledgeCenterModalComponent {

  checkboxes = [
    { id: 'check1', label: 'Mutual Funds', link: ['/knowledge-center/category'], isChecked: true },
    { id: 'check2', label: 'Women & Investing', link: ['/knowledge-center/category'], isChecked: false },
    { id: 'check3', label: 'Child’s future', link: ['/knowledge-center/category'],  isChecked: false },
    { id: 'check4', label: 'Retirement planning', link: ['/knowledge-center/category'],  isChecked: false },
    { id: 'check5', label: 'Category 1',link: ['/knowledge-center/category'], isChecked: false },
    { id: 'E-Booklest', label: 'E-Booklest',link: ['/knowledge-center/booklets'], isChecked: false },
    { id: 'check6', label: 'Blog', link: ['/knowledge-center/blogs'],  isChecked: false },
    { id: 'check7', label: 'Podcast', link: ['/knowledge-center/podcast'],  isChecked: false },
    { id: 'check8', label: 'Frankly Speaking', link: ['/knowledge-center/frankly'],  isChecked: false },
    { id: 'Investment-Glossary', label: 'Investment Glossary', link: ['/knowledge-center/glossary'],  isChecked: false },
  ];

//   subcheckboxe = [
//     { id: 'check9', label: 'Most Viewed', isChecked: true },
//     { id: 'check10', label: 'Top Rated', isChecked: false },
//     { id: 'check11', label: 'Trending', isChecked: false },
//     { id: 'check12', label: 'Content of the week', isChecked: false }
// ];

checkboxeFranklin = [
  { id: 'about_Us', label: 'About us', isChecked: true },
  { id: 'explore_Courses', label: 'Explore Courses', isChecked: false },
  { id: 'join_For_Free', label: 'Join For Free', isChecked: false },
]

checkboxeMarket = [
  { id: 'blogs', label: 'Blogs',link: ['/knowledge-center/blogs'], isChecked: true },
  { id: 'latest_Commentaries', label: 'Latest Commentaries',link: ['/knowledge-center/commentaries'], isChecked: false },
]

  constructor() {}

  ngOnit()
  {

  }

  toggleCheckbox(clickedCheckbox: { id: string, label: string, isChecked: boolean }): void {
    console.log(clickedCheckbox)
    this.checkboxes.forEach(checkbox => checkbox.isChecked = false);

    clickedCheckbox.isChecked = true;
}

// toggleSubCheckbox(clickedCheckbox: { id: string, label: string, isChecked: boolean }): void {
//   console.log(clickedCheckbox);
  
//   this.subcheckboxe.forEach(checkbox => checkbox.isChecked = false);

//   clickedCheckbox.isChecked = true;
// }

toggleFranklinCheckbox(clickedCheckbox: { id: string, label: string, isChecked: boolean }): void {
  console.log(clickedCheckbox);
  
  this.checkboxeFranklin.forEach(checkbox => checkbox.isChecked = false);

  clickedCheckbox.isChecked = true;
}

toggleMarketCheckbox(clickedCheckbox: { id: string, label: string, isChecked: boolean }): void {
  console.log(clickedCheckbox);
  
  this.checkboxeMarket.forEach(checkbox => checkbox.isChecked = false);

  clickedCheckbox.isChecked = true;
}

}
