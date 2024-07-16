import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreCalculatorsComponent } from './more-calculators.component';

describe('MoreCalculatorsComponent', () => {
  let component: MoreCalculatorsComponent;
  let fixture: ComponentFixture<MoreCalculatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreCalculatorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoreCalculatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
