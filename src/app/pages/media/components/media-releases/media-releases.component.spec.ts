import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaReleasesComponent } from './media-releases.component';

describe('MediaReleasesComponent', () => {
  let component: MediaReleasesComponent;
  let fixture: ComponentFixture<MediaReleasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaReleasesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediaReleasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
