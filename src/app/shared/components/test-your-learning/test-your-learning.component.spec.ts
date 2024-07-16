import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestYourLearningComponent } from './test-your-learning.component';

describe('TestYourLearningComponent', () => {
  let component: TestYourLearningComponent;
  let fixture: ComponentFixture<TestYourLearningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestYourLearningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestYourLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
