import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSidePopupComponent } from './home-side-popup.component';

describe('HomeSidePopupComponent', () => {
  let component: HomeSidePopupComponent;
  let fixture: ComponentFixture<HomeSidePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeSidePopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeSidePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
