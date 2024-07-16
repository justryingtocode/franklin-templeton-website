import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaArticlesComponent } from './media-articles.component';

describe('MediaArticlesComponent', () => {
  let component: MediaArticlesComponent;
  let fixture: ComponentFixture<MediaArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaArticlesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediaArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
