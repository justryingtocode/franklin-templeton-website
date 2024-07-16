import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StpComponent } from './stp.component';

describe('StpComponent', () => {
  let component: StpComponent;
  let fixture: ComponentFixture<StpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
