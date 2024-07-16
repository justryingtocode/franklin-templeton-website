import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenLearningComponent } from './open-learning.component';

describe('OpenLearningComponent', () => {
  let component: OpenLearningComponent;
  let fixture: ComponentFixture<OpenLearningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenLearningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
