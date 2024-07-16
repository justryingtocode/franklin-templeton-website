import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFundDataComponent } from './add-fund-data.component';

describe('AddFundDataComponent', () => {
  let component: AddFundDataComponent;
  let fixture: ComponentFixture<AddFundDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFundDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFundDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
