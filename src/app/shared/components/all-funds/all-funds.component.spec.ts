import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllFundsComponent } from './all-funds.component';

describe('AllFundsComponent', () => {
  let component: AllFundsComponent;
  let fixture: ComponentFixture<AllFundsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllFundsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllFundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
