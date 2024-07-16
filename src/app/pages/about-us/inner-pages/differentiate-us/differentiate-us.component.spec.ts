import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DifferentiateUsComponent } from './differentiate-us.component';

describe('DifferentiateUsComponent', () => {
  let component: DifferentiateUsComponent;
  let fixture: ComponentFixture<DifferentiateUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DifferentiateUsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DifferentiateUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
