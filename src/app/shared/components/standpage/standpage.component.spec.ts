import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandpageComponent } from './standpage.component';

describe('StandpageComponent', () => {
  let component: StandpageComponent;
  let fixture: ComponentFixture<StandpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StandpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
