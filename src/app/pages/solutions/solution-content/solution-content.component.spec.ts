import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionContentComponent } from './solution-content.component';

describe('SolutionContentComponent', () => {
  let component: SolutionContentComponent;
  let fixture: ComponentFixture<SolutionContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolutionContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolutionContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
