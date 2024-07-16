import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalOffersComponent } from './digital-offers.component';

describe('DigitalOffersComponent', () => {
  let component: DigitalOffersComponent;
  let fixture: ComponentFixture<DigitalOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigitalOffersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigitalOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
