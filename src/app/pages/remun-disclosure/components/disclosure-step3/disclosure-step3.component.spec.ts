import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisclosureStep3Component } from './disclosure-step3.component';

describe('DisclosureStep3Component', () => {
  let component: DisclosureStep3Component;
  let fixture: ComponentFixture<DisclosureStep3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisclosureStep3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisclosureStep3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
