import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedressalComponent } from './redressal.component';

describe('RedressalComponent', () => {
  let component: RedressalComponent;
  let fixture: ComponentFixture<RedressalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedressalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedressalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
