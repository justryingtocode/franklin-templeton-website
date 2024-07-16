import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningBannerComponent } from './learning-banner.component';

describe('LearningBannerComponent', () => {
  let component: LearningBannerComponent;
  let fixture: ComponentFixture<LearningBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearningBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearningBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
