import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningCategory2Component } from './learning-category2.component';

describe('LearningCategory2Component', () => {
  let component: LearningCategory2Component;
  let fixture: ComponentFixture<LearningCategory2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearningCategory2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearningCategory2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
