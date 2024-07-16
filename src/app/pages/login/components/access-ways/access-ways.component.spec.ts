import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessWaysComponent } from './access-ways.component';

describe('AccessWaysComponent', () => {
  let component: AccessWaysComponent;
  let fixture: ComponentFixture<AccessWaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessWaysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccessWaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
