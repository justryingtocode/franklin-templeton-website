import { Component, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-invest-now-form',
  templateUrl: './invest-now-form.component.html',
  styleUrls: ['./invest-now-form.component.scss']
})
export class InvestNowFormComponent implements OnInit {
  @Input() investNowButton:boolean = true;

  showHeading: boolean = true;
  investNowForm: FormGroup = new FormGroup({})
  constructor(private _fb: FormBuilder, private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    let menu: any = document.getElementById("invest-now");
    let dummy: any = document.getElementById("dummy-row");

    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    // console.log(winScroll);
    if((winScroll>850 && window.innerWidth < 900) || (winScroll>1600 && window.innerWidth>900) ) {
      // dummy.classList.remove('show-dummy');
      menu.classList.add('invest-now-fixed')
    }
    else {
      // dummy.classList.add('show-dummy');
      menu.classList?.remove('invest-now-fixed')
    }
  }
  ngOnInit(): void {
    this.initForm()
  }

  initForm = () => {
    this.investNowForm = this._fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      query: ['', Validators.required],
      remarks: ['']
    })
  }
  backTosteps(event: any) {
    this.showHeading = event;
  }
}
