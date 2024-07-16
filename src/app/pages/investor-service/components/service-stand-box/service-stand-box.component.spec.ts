import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceStandBoxComponent } from './service-stand-box.component';

describe('ServiceStandBoxComponent', () => {
  let component: ServiceStandBoxComponent;
  let fixture: ComponentFixture<ServiceStandBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceStandBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceStandBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
