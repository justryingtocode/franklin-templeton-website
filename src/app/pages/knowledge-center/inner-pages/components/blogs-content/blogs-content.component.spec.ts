import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogsContentComponent } from './blogs-content.component';

describe('BlogsContentComponent', () => {
  let component: BlogsContentComponent;
  let fixture: ComponentFixture<BlogsContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogsContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
