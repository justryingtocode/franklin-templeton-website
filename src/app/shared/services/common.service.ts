import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class CommonService {
    cartdetails: Array<any> = [];

    private data: any; // Your actual data

    private dataChangeSubject = new Subject<any>();

    private cellChangeSubject = new Subject<any>();

    private forComparedCardData: Subject<any> = new Subject<any>(); // Initialize as a Subject

    setCartChange(message: string) {
        this.cellChangeSubject.next(message);
      }
      getCartChange(): Observable<any> {
        return this.cellChangeSubject.asObservable();
      }

    setInvestmentData(newData: any) {
        this.data = newData;
        this.dataChangeSubject.next(this.data);
    }

    getInvestmentData(): Observable<any> {
        return this.dataChangeSubject.asObservable();
    }

    setComapreCardData(data: any) {
      this.forComparedCardData.next(data); 
    }

    getCompareCardData(): Observable<any> {
      return this.forComparedCardData.asObservable();
    }

    setFontResize(fontSize: any= null){ 
      let activeFontSize: any= fontSize;

      if(!activeFontSize){
        activeFontSize = localStorage.getItem("activeFontSize") || 2;
      }
      
      localStorage.setItem("activeFontSize", activeFontSize);

      activeFontSize = Number(activeFontSize);
      switch(activeFontSize){
        case 1:
          $('html').removeClass("large");
          $('html').addClass("small");
          break;
        case 2:
          $('html').removeClass("small large");
          break;
        case 3:
          $('html').addClass("large");
          $('html').removeClass("small");
          break;
          default:
          $('html').removeClass("small large");
      }
    }

    setDarkmode(darkMod:any = undefined){
      let activeMode: any = darkMod;
      if(activeMode == undefined){
        activeMode = localStorage.getItem("activeDarkMode") || false;
      }
      if(activeMode){
        activeMode = JSON.parse(activeMode);  // convert into boolean
      }
      if(activeMode){
        $('body').addClass("page-dark-mode");
      }else{
        $('body').removeClass("page-dark-mode");
      }
      if(activeMode == true || activeMode == false){
        localStorage.setItem("activeDarkMode", activeMode);
      }
    }
    
}