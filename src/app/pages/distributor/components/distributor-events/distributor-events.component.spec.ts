import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributorEventsComponent } from './distributor-events.component';

describe('DistributorEventsComponent', () => {
  let component: DistributorEventsComponent;
  let fixture: ComponentFixture<DistributorEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistributorEventsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistributorEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
