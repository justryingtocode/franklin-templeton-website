import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentCartComponent } from './investment-cart.component';

describe('InvestmentCartComponent', () => {
  let component: InvestmentCartComponent;
  let fixture: ComponentFixture<InvestmentCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestmentCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestmentCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
