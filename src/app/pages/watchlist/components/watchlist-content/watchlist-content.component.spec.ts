import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchlistContentComponent } from './watchlist-content.component';

describe('WatchlistContentComponent', () => {
  let component: WatchlistContentComponent;
  let fixture: ComponentFixture<WatchlistContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WatchlistContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WatchlistContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
