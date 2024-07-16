import { Component,HostListener, OnInit, ViewChild } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {

  @ViewChild('blogSlickModal')
  blogSlickModal!: SlickCarouselComponent;
  @ViewChild('courseSlickModal')
  courseSlickModal!: SlickCarouselComponent;

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    if (this.blogSlickModal !== undefined) {
      if (window.innerWidth > 768) {
        if (this.blogSlickModal.initialized) {
          this.blogSlickModal.unslick();
        }
      } else if (!this.blogSlickModal.initialized) {
        this.blogSlickModal.initSlick();
      }
    }
    if (this.courseSlickModal !== undefined) {
      if (window.innerWidth > 768) {
        if (this.courseSlickModal.initialized) {
          this.courseSlickModal.unslick();
        }
      } else if (!this.courseSlickModal.initialized) {
        this.courseSlickModal.initSlick();
      }
    }
  }
  slideConfig: any = {
    dots: false,
    arrows: false,
    autoplay: false,
    slidesToShow: 1,
    infinite: false,
    cssEase: 'linear',
    centerMode: false,
    responsive: [
      {
        breakpoint: 9999,
        settings: "unslick",
    },
        {
            breakpoint: 768,
            
            settings: {
              centerMode: true,
              arrows: false,
              slidesToShow:1,
                centerPadding: '5%',
                slidesToScroll: 1
            }
        }
    ]
  }
 
  constructor() { }

  ngOnInit(): void {
  }
  changeOnHover(event: any, id: string) {
    let menu: any = document.getElementById(id);
    let menu1: any = document.getElementById(id+'1');
    // setTimeout(() => {
      menu?.classList.add('d-none')
      menu1?.classList.remove('d-none')
    // }, 100);

  }
  changeOnHover1(event: any, id: string) {
    let menu: any = document.getElementById(id);
    const me = document.getElementById(event.target.id)
    // setTimeout(() => {
      menu?.classList.remove('d-none')
      me?.classList.add('d-none')
      // menu.style.display = 'hidden';
    // }, 100);
  }
}
