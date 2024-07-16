import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandBoxComponent } from './stand-box.component';

describe('StandBoxComponent', () => {
  let component: StandBoxComponent;
  let fixture: ComponentFixture<StandBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StandBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
