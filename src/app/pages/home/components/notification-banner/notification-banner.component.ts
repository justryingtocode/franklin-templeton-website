import { Component, OnInit } from '@angular/core';
// import { trigger, transition, style, animate } from "@angular/animations";

@Component({
  selector: 'app-notification-banner',
  templateUrl: './notification-banner.component.html',
  styleUrls: ['./notification-banner.component.scss'],
  // animations: [
  //   trigger('carouselAnimation', [
  //     transition('void => *', [
  //       style({ transform: 'translateX({{direction}}%)' }),
  //       animate('.3s ease-out', style({ opacity: 1 }))
  //     ]),
  //     transition('* => void', [
  //       animate('.3s ease-out', style({ opacity: 0 }))
  //     ])
  //   ])
  // ]
})
export class NotificationBannerComponent implements OnInit {
  ngOnInit(): void {
    let noticeBannerStatus: any = sessionStorage.getItem('noticeBannerIsOpen');
    noticeBannerStatus = JSON.parse(noticeBannerStatus);
    const notificationBanner: any = document.getElementById('updates-banners');
    if (!noticeBannerStatus) {
      window.innerWidth > 700 ? notificationBanner?.classList.add('margin-top-10')
        : notificationBanner?.classList.add('mobile-margin-top');
    }
  }

}
