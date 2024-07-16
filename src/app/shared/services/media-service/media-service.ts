import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  constructor(private _httpClient: HttpClient) { }

  getMediaDetails = () => {
    return this._httpClient.get('/assets/mock-data/home-media.json');
  }
}