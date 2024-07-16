import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccStatmentComponent } from './acc-statment.component';

describe('AccStatmentComponent', () => {
  let component: AccStatmentComponent;
  let fixture: ComponentFixture<AccStatmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccStatmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccStatmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
