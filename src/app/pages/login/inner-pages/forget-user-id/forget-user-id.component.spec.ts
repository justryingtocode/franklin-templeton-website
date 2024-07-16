import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetUserIdComponent } from './forget-user-id.component';

describe('ForgetUserIdComponent', () => {
  let component: ForgetUserIdComponent;
  let fixture: ComponentFixture<ForgetUserIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgetUserIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgetUserIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
