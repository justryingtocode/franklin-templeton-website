import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FranklyComponent } from './frankly.component';

describe('FranklyComponent', () => {
  let component: FranklyComponent;
  let fixture: ComponentFixture<FranklyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FranklyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FranklyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
