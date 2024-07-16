import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdcwComponent } from './idcw.component';

describe('IdcwComponent', () => {
  let component: IdcwComponent;
  let fixture: ComponentFixture<IdcwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdcwComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdcwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
