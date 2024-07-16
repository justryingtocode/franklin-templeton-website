import { Component } from '@angular/core';

@Component({
  selector: 'app-lumpsum',
  templateUrl: './lumpsum.component.html',
  styleUrls: ['./lumpsum.component.scss']
})
export class LumpsumComponent {

  showAddFund:boolean=false;
  otherCalculators:any = [];
  otherSolutions:any = [];
  faqs:any = [];
  resources:any = [];

  constructor() {}

  ngOnInit(): void {
    this.otherCalculators = this.fetchOtherCalculators();
    this.otherSolutions = this.fetchOtherSolutions();
    this.faqs = this.fetchFaqs();
    this.resources = this.fetchResources();
  }

  fetchOtherCalculators() {
    let otherCalculatorsData = [
      {img:"lump-icon.svg", name:"Lumpsum Calculator", cta:"Calculate Now", route:"/all-calculators/lumpsum"},
      {img:"top-up-icon.svg", name:"SIP Top-Up Calculator", cta:"Calculate Now", route:"/all-calculators/topup"},
      {img:"stp-icon.svg", name:"STP Calculator", cta:"Calculate Now", route:"/all-calculators/stp"},
      {img:"swp-icon.svg", name:"SWP Calculator", cta:"Calculate Now", route:"/all-calculators/swp"},
      {img:"swp-icon.svg", name:"SWP Calculator", cta:"Calculate Now", route:"/all-calculators/swp"},
    ];
    return otherCalculatorsData;
  }

  fetchOtherSolutions() {
    let otherSolutionsData = [
        {img:"fund1.png", name:"Child's Education", cta:"Calculate and invest  <br/> for your child education", route:"/solutions/content/1"},
        {img:"fund3.png", name:"Retirement", cta:"Calculate and invest <br/> for your retirement", route:"/solutions/content/1"},
        {img:"fund2.png", name:"Holiday", cta:"Calculate and invest <br/> for your holiday", route:"/solutions/content/1"},
        {img:"fund4.png", name:"Cash Management", cta:"Calculate and invest <br/> for your cash management", route:"/solutions/content/1"},
        {img:"fund5.png", name:"Dream Home", cta:"Calculate and invest <br/> for your dream home", route:"/solutions/content/1"},
        {img:"fund6.png", name:"Wealth Creation", cta:"Calculate and invest <br/> for your wealth creation", route:"/solutions/content/1"},
        {img:"fund7.png", name:"Tax Planning", cta:"Calculate and invest <br/> for your tax planning", route:"/solutions/content/1"},
        {img:"fund8.png", name:"Customize Your Plan", cta:"Calculate and invest <br/> for your customized plan", route:"/solutions/content/1"},
    ];
    return otherSolutionsData;
  }

  fetchFaqs() {
    let faqs = [
      {id:"12", que:"Is SIP investment tax free?", ans:"No, most SIP investment returns are taxable. However, SIP investments in tax saving mutual fund schemes i.e, ELSS Mutual funds."},
      {id:"13", que:"What is a SIP calculator?", ans:"A Systematic Investment Plan (SIP) calculator is an online financial tool that can help to calculate the returns you would earn on your SIP investments. The calculator also tells you how much you would need to invest every month to earn a target corpus. Simply put, it provides a roadmap to achieve your various financial goals."},
      {id:"14", que:"What is SIP?", ans:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "},
      {id:"15", que:"What are the types of SIP?", ans:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  "},
      {id:"16", que:"Benefits of investing in SIP, and why should you invest in SIP?", ans:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "},
      {id:"17", que:"How is SIP Return Calculated?", ans:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "},
    ];
    return faqs;
  }

  fetchResources() {
    let resources = [
      {img:"category1.png", "name":"How to save tax with ELSS", "views":"1k", "likes":"300", "readingTime":"5 mins read", "route":"knowledge-center/article1/"},
      {img:"category1.png", "name":"How to save tax with ELSS", "views":"1k", "likes":"300", "readingTime":"5 mins read", "route":"knowledge-center/article1/"},
      {img:"category1.png", "name":"How to save tax with ELSS", "views":"1k", "likes":"300", "readingTime":"5 mins read", "route":"knowledge-center/article1/"},
      {img:"category1.png", "name":"How to save tax with ELSS", "views":"1k", "likes":"300", "readingTime":"5 mins read", "route":"knowledge-center/article1/"},
    ];
    return resources;
  }

  handleAddFundStatus(showAddFund: boolean) {
    // Do something with the received data (showAddFund)
    console.log('Add Fund Status Changed:', showAddFund);
    this.showAddFund = showAddFund;
  }

  makeToggle()
  {
    this.showAddFund = !this.showAddFund;
  }

}
