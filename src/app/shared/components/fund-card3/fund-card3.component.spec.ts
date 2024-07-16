import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundCard3Component } from './fund-card3.component';

describe('FundCard3Component', () => {
  let component: FundCard3Component;
  let fixture: ComponentFixture<FundCard3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FundCard3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FundCard3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
