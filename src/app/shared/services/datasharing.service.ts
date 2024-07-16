import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatasharingService {

  private sharingData: any;

  constructor() { }

  setSharedData(data: any) {
    this.sharingData = data;
  }

  getSharedData() {
    return this.sharingData;
  }
}
