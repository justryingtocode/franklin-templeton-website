import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadGenFormComponent } from './lead-gen-form.component';

describe('LeadGenFormComponent', () => {
  let component: LeadGenFormComponent;
  let fixture: ComponentFixture<LeadGenFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeadGenFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeadGenFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
