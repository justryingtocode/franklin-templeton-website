import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributorFeaturesComponent } from './distributor-features.component';

describe('DistributorFeaturesComponent', () => {
  let component: DistributorFeaturesComponent;
  let fixture: ComponentFixture<DistributorFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistributorFeaturesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistributorFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
