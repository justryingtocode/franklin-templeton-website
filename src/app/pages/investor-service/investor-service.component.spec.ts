import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestorServiceComponent } from './investor-service.component';

describe('InvestorServiceComponent', () => {
  let component: InvestorServiceComponent;
  let fixture: ComponentFixture<InvestorServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestorServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestorServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
