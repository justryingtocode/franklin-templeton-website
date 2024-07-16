import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TouchPointsComponent } from './touch-points.component';

describe('TouchPointsComponent', () => {
  let component: TouchPointsComponent;
  let fixture: ComponentFixture<TouchPointsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TouchPointsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TouchPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
