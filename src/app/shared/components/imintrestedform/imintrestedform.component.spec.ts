import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImintrestedformComponent } from './imintrestedform.component';

describe('ImintrestedformComponent', () => {
  let component: ImintrestedformComponent;
  let fixture: ComponentFixture<ImintrestedformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImintrestedformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImintrestedformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
