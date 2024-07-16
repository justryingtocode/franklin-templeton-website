import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundCard2Component } from './fund-card2.component';

describe('FundCard2Component', () => {
  let component: FundCard2Component;
  let fixture: ComponentFixture<FundCard2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FundCard2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FundCard2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
