import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LumpsumCalculatorFormComponent } from './lumpsum-calculator-form.component';

describe('LumpsumCalculatorFormComponent', () => {
  let component: LumpsumCalculatorFormComponent;
  let fixture: ComponentFixture<LumpsumCalculatorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LumpsumCalculatorFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LumpsumCalculatorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
