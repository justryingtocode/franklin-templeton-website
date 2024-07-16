import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordiandetailsComponent } from './accordiandetails.component';

describe('AccordiandetailsComponent', () => {
  let component: AccordiandetailsComponent;
  let fixture: ComponentFixture<AccordiandetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordiandetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccordiandetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
