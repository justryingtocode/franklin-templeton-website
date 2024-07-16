import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisclosureStep2Component } from './disclosure-step2.component';

describe('DisclosureStep2Component', () => {
  let component: DisclosureStep2Component;
  let fixture: ComponentFixture<DisclosureStep2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisclosureStep2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisclosureStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
