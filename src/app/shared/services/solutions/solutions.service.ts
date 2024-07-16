import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SolutionsService {

  constructor(private _httpClient: HttpClient) { }

  getMockSolutionsCardData = () => {
    return this._httpClient.get('/assets/mock-data/solutions/solution-cards.json');
  }
  getMockSolutionsFilterOptions = () => {
    return this._httpClient.get('/assets/mock-data/funds-filter.json');
  }
  getgoalPlannerCardData = () => {
    return this._httpClient.get('/assets/mock-data/solutions/stepper-s2-goal-planner.json');
  }
}
