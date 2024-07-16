import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotUserIdFormComponent } from './forgot-user-id-form.component';

describe('ForgotUserIdFormComponent', () => {
  let component: ForgotUserIdFormComponent;
  let fixture: ComponentFixture<ForgotUserIdFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgotUserIdFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgotUserIdFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
