import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsDownloadComponent } from './forms-download.component';

describe('FormsDownloadComponent', () => {
  let component: FormsDownloadComponent;
  let fixture: ComponentFixture<FormsDownloadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsDownloadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
