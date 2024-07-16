import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SipBreadcrumbComponent } from './sip-breadcrumb.component';

describe('SipBreadcrumbComponent', () => {
  let component: SipBreadcrumbComponent;
  let fixture: ComponentFixture<SipBreadcrumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SipBreadcrumbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SipBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
