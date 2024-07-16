import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComparefundService {

  constructor(private _httpClient: HttpClient) { }

  getCompareFundCardData = () => {
    return this._httpClient.get('/assets/mock-data/compare-fund/comparefund-cards.json');
  }

  getCompareFundHomeCardData = () => {
    return this._httpClient.get('/assets/mock-data/compare-fund/comparefundhome-card.json')
  }

  getCompareFundAccordianData =() =>{
    return this._httpClient.get('/assets/mock-data/compare-fund/accordian-card.json');
  }

  getHedaerCard = () =>{
    return this._httpClient.get('/assets/mock-data/compare-fund/header-card.json');
  }

}
