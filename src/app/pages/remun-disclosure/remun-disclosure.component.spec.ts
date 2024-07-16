import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemunDisclosureComponent } from './remun-disclosure.component';

describe('RemunDisclosureComponent', () => {
  let component: RemunDisclosureComponent;
  let fixture: ComponentFixture<RemunDisclosureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemunDisclosureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemunDisclosureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
