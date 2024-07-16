import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComapreMutualFundComponent } from './comapre-mutual-fund.component';

describe('ComapreMutualFundComponent', () => {
  let component: ComapreMutualFundComponent;
  let fixture: ComponentFixture<ComapreMutualFundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComapreMutualFundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComapreMutualFundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
