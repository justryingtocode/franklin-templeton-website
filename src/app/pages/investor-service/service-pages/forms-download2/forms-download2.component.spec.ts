import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsDownload2Component } from './forms-download2.component';

describe('FormsDownload2Component', () => {
  let component: FormsDownload2Component;
  let fixture: ComponentFixture<FormsDownload2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsDownload2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsDownload2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
