import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherCalculatorsComponent } from './other-calculators.component';

describe('OtherCalculatorsComponent', () => {
  let component: OtherCalculatorsComponent;
  let fixture: ComponentFixture<OtherCalculatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherCalculatorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherCalculatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
