import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundReturnComponent } from './fund-return.component';

describe('FundReturnComponent', () => {
  let component: FundReturnComponent;
  let fixture: ComponentFixture<FundReturnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FundReturnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FundReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
