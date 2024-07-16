import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributorFaqComponent } from './distributor-faq.component';

describe('DistributorFaqComponent', () => {
  let component: DistributorFaqComponent;
  let fixture: ComponentFixture<DistributorFaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistributorFaqComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistributorFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
