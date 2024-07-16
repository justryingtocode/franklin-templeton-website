import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitizeWealthComponent } from './digitize-wealth.component';

describe('DigitizeWealthComponent', () => {
  let component: DigitizeWealthComponent;
  let fixture: ComponentFixture<DigitizeWealthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigitizeWealthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigitizeWealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
