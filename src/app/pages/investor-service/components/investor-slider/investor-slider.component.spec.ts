import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestorSliderComponent } from './investor-slider.component';

describe('InvestorSliderComponent', () => {
  let component: InvestorSliderComponent;
  let fixture: ComponentFixture<InvestorSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestorSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestorSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
