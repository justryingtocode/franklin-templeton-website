import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchlistEmptyComponent } from './watchlist-empty.component';

describe('WatchlistEmptyComponent', () => {
  let component: WatchlistEmptyComponent;
  let fixture: ComponentFixture<WatchlistEmptyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WatchlistEmptyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WatchlistEmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
