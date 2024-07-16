import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyKycComponent } from './modify-kyc.component';

describe('ModifyKycComponent', () => {
  let component: ModifyKycComponent;
  let fixture: ComponentFixture<ModifyKycComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyKycComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyKycComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
