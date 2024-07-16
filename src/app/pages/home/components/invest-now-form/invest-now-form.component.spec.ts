import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestNowFormComponent } from './invest-now-form.component';

describe('InvestNowFormComponent', () => {
  let component: InvestNowFormComponent;
  let fixture: ComponentFixture<InvestNowFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestNowFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestNowFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
