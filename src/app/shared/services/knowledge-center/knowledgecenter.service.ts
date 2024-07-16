import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class KnowledgecenterService {

  constructor(private _httpClient: HttpClient) { }

  getBlogCardData = () => {
    return this._httpClient.get('/assets/mock-data/blog-knowledge-center.json');
  }

  getCategoryCardData = () => {
    return this._httpClient.get('/assets/mock-data/category-knowledge-center.json');
  }

  getBookletCardData = () => {
    return this._httpClient.get('/assets/mock-data/booklet.-knowledge-center.json');
  }

}
