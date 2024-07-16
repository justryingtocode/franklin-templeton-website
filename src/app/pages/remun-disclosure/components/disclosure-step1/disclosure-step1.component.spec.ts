import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisclosureStep1Component } from './disclosure-step1.component';

describe('DisclosureStep1Component', () => {
  let component: DisclosureStep1Component;
  let fixture: ComponentFixture<DisclosureStep1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisclosureStep1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisclosureStep1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
