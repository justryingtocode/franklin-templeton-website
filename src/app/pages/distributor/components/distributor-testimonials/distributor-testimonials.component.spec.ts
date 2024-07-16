import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributorTestimonialsComponent } from './distributor-testimonials.component';

describe('DistributorTestimonialsComponent', () => {
  let component: DistributorTestimonialsComponent;
  let fixture: ComponentFixture<DistributorTestimonialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistributorTestimonialsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistributorTestimonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
