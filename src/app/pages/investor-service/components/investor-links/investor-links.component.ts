import { isPlatformBrowser } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-investor-links',
  templateUrl: './investor-links.component.html',
  styleUrls: ['./investor-links.component.scss']
})
export class InvestorLinksComponent implements OnInit {

  linksForAccountStatements: any = [];
  linksForPersonalDetails: any = [];
  linksForNavAndOthers: any = [];
  linksForFormAndDownloads: any = [];
  linksForWaysToTract: any = [];


  slideConfig = {
    infinite: false,
    dots: false,
    arrows: true,
    prevArrow: "<button type='button' class='btn btn-outline-secondary left-arrow'><i class='bi bi-arrow-left-short'></i></button>",
    nextArrow: "<button type='button' class='btn btn-outline-secondary right-arrow'><i class='bi-arrow-right-short'></i></button>",

    slidesToShow: 4.4,
    slidesToScroll: 1,
    swipeToSlide: true,
    touchThreshold: 100,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3.4,
          slidesToScroll: 1
        }
      }
      ,
      {
        breakpoint: 768,

        settings: {
          slidesToShow: 2.2,
          slidesToScroll: 1
        }
      }
      ,
      {
        breakpoint: 576,

        settings: {
          arrows: false,
          slidesToShow: 1.2,
          slidesToScroll: 1
        }
      }
    ]
  };


  isMobile: boolean | undefined;

  constructor() { }

  ngOnInit(): void {
    this.linksForAccountStatements = [
      { label: "Account Statement", link: "/investor-services/account-statement", icon: "calender.svg" },
      { label: "Capital Gain Statement", link: "/investor-services/account-statement", icon: "calender.svg" },
      { label: "Consolidated Account Statement", link: "/investor-services/account-statement", icon: "calender.svg" }
    ];

    this.linksForPersonalDetails = [
      { label: "Update KYC Details", link: "/investor-services/modify-kyc", icon: "UserCircleGear.svg" },
      { label: "Update Your PAN", link: "/investor-services/modify-kyc", icon: "CreditCard1.svg" },
      { label: "Certify FATCA/Update KYC Details", link: "/investor-services/modify-kyc", icon: "NotePencil.svg" }
    ];

    this.linksForNavAndOthers = [
      { label: "NAVs", link: "/investor-services/NAVs", icon: "BellRinging.svg" },
      { label: "Unclaimed Investments", link: "/investor-services/faq", icon: "Coins.svg" },
      { label: "FAQ’s", link: "/investor-services/faq", icon: "Question.svg" },
    ];

    this.linksForFormAndDownloads = [
      { label: "Servicing Forms", link: "/investor-services/servicing-forms", icon: "NotePencil.svg" },
      { label: "Fund docs", link: "/investor-services/servicing-forms", icon: "File.svg" },
      { label: "Factsheets", link: "/investor-services/servicing-forms", icon: "Files.svg" },
      { label: "Addenda/Notices", link: "/investor-services/servicing-forms", icon: "CreditCard1.svg" },
      { label: "TER", link: "/investor-services/servicing-forms", icon: "File.svg" }
    ];

    this.linksForWaysToTract = [
      {label:"Find Franklin Templeton",link:"/investor-services/locations",icon:"MapPinLine.svg"},
      {label:"Digital Touchpoints",link:"/investor-services/touch-points",icon:"Laptop2.svg"},
      {label:"Request a Call Back?",link:"#",icon:"PhoneCall.svg",target:"#callBack", targeMob:"#callBack"},
      {label:"Speak to Us",link:"#",icon:"File.svg",target:"#speakModal", targeMob:"#offcanvasBottomSpeak"},
      {label:"Email Us",icon:"File.svg",target:"#emailModal", targeMob:"#offcanvasBottomEmail"},
      {label:"Grievance Redressal",link:"/investor-services/redressal",icon:"File.svg"},
    ];

  }

}
