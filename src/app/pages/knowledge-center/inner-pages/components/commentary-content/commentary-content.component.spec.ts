import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentaryContentComponent } from './commentary-content.component';

describe('CommentaryContentComponent', () => {
  let component: CommentaryContentComponent;
  let fixture: ComponentFixture<CommentaryContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentaryContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentaryContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
