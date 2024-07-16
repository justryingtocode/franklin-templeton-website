import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit  {

  
  selectedCategory: string = 'All';
  categories: string[] = ['All', 'Fund', 'Forms & Documents', 'General', 'My Accounts'];

  funds: any[] = [];

  
  
  ngOnInit(): void {
    
  }
  
  selectCategory(category: string): void {
    console.log(category)
    this.selectedCategory = category;
    // this.getCategory(category);
  }

}
