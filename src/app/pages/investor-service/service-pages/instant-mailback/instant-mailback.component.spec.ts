import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstantMailbackComponent } from './instant-mailback.component';

describe('InstantMailbackComponent', () => {
  let component: InstantMailbackComponent;
  let fixture: ComponentFixture<InstantMailbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstantMailbackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstantMailbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
