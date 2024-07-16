import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvalidSearchComponent } from './invalid-search.component';

describe('InvalidSearchComponent', () => {
  let component: InvalidSearchComponent;
  let fixture: ComponentFixture<InvalidSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvalidSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvalidSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
