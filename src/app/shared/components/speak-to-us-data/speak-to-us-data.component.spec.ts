import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakToUsDataComponent } from './speak-to-us-data.component';

describe('SpeakToUsDataComponent', () => {
  let component: SpeakToUsDataComponent;
  let fixture: ComponentFixture<SpeakToUsDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeakToUsDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpeakToUsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
