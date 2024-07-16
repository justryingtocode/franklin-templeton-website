import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookletsComponent } from './booklets.component';

describe('BookletsComponent', () => {
  let component: BookletsComponent;
  let fixture: ComponentFixture<BookletsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookletsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookletsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
