import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundCard1Component } from './fund-card1.component';

describe('FundCard1Component', () => {
  let component: FundCard1Component;
  let fixture: ComponentFixture<FundCard1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FundCard1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FundCard1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
