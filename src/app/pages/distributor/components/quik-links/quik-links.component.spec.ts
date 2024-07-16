import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuikLinksComponent } from './quik-links.component';

describe('QuikLinksComponent', () => {
  let component: QuikLinksComponent;
  let fixture: ComponentFixture<QuikLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuikLinksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuikLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
