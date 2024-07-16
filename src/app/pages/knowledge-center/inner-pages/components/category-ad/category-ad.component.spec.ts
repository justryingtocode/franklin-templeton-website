import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryAdComponent } from './category-ad.component';

describe('CategoryAdComponent', () => {
  let component: CategoryAdComponent;
  let fixture: ComponentFixture<CategoryAdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryAdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
