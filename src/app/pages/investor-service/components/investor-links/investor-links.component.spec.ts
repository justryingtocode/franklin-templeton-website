import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestorLinksComponent } from './investor-links.component';

describe('InvestorLinksComponent', () => {
  let component: InvestorLinksComponent;
  let fixture: ComponentFixture<InvestorLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestorLinksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestorLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
