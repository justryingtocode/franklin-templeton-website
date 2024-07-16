import { Component,HostListener } from '@angular/core';

@Component({
  selector: 'app-touch-points',
  templateUrl: './touch-points.component.html',
  styleUrls: ['./touch-points.component.scss']
})
export class TouchPoints2Component {
  IsCardVisible:boolean = false;
  showCards(){
    this.IsCardVisible = true;
  }
  hideCards(){
    this.IsCardVisible = false;
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event: any) {
 
    const sections = document.querySelectorAll<any>('.fd-tab-sections');
    const navLi = document.querySelectorAll('.FT-blocks-nav ul li');
    let current = '';
    // console.log(sections, navLi);

    sections.forEach((section) => {
      // console.log(section)
      const sectionTop = section.offsetTop;
      if (pageYOffset >= (sectionTop - 85)) {
        current = section.getAttribute('id');
      }
    });

    navLi.forEach((li) => {
      // console.log(li)
      current? li.children[0].classList.remove('active-item') : '';
      // li.children[0].classList.remove('active-item');
      if (li.children[0].classList.contains(current)) {
        li.children[0].classList.add('active-item');
      }
    });
  }

  scrollTo(param: any) {
    console.log(param)
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
