import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisclosureStepsComponent } from './disclosure-steps.component';

describe('DisclosureStepsComponent', () => {
  let component: DisclosureStepsComponent;
  let fixture: ComponentFixture<DisclosureStepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisclosureStepsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisclosureStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
