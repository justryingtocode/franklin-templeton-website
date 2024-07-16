import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SolutionsStepperLayoutComponent } from './solutions-stepper-layout.component';

describe('StepperContentComponent', () => {
  let component: SolutionsStepperLayoutComponent;
  let fixture: ComponentFixture<SolutionsStepperLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolutionsStepperLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolutionsStepperLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
