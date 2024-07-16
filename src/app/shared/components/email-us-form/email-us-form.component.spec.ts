import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailUsFormComponent } from './email-us-form.component';

describe('EmailUsFormComponent', () => {
  let component: EmailUsFormComponent;
  let fixture: ComponentFixture<EmailUsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailUsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailUsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
