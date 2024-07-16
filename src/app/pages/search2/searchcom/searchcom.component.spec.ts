import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchcomComponent } from './searchcom.component';

describe('SearchcomComponent', () => {
  let component: SearchcomComponent;
  let fixture: ComponentFixture<SearchcomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchcomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchcomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
