import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisclosureStep4Component } from './disclosure-step4.component';

describe('DisclosureStep4Component', () => {
  let component: DisclosureStep4Component;
  let fixture: ComponentFixture<DisclosureStep4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisclosureStep4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisclosureStep4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
