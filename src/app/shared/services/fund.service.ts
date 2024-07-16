import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FundService {

  constructor(private _httpClient: HttpClient) { }

  getMockFundsData = () => {
    return this._httpClient.get('/assets/mock-data/funds.jsonc')
  }

  getMockFundsData1 = () => {
    return this._httpClient.get('http://15.207.231.87:3000/fund-details')
  }
  getMockFooterData = () => {
    return this._httpClient.get('/assets/mock-data/footer/footer.json')
  }
  getMockHeaderData = () => {
    return this._httpClient.get('/assets/mock-data/header/header.json')
  }
  getFundsDetailData = () => {
    return this._httpClient.get('/assets/mock-data/compare-fund/funddetails-card.json')
  }
  getFundsManagerData = () => {
    return this._httpClient.get('/assets/mock-data/compare-fund/fundsmanager.json')
  }
  getOtherFundsData = () => {
    return this._httpClient.get('/assets/mock-data/compare-fund/otherfundsdetail.json')
  }
  getSidebarFilterContent = () => {
    return this._httpClient.get('/assets/mock-data/fund-sidebar-filters.json');
  }

  getSidebarFilter2Content = () => {
    return this._httpClient.get('/assets/mock-data/fund-sidebar-filter2.json');
  }
}
