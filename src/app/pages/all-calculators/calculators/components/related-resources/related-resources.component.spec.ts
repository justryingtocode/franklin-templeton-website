import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedResourcesComponent } from './related-resources.component';

describe('RelatedResourcesComponent', () => {
  let component: RelatedResourcesComponent;
  let fixture: ComponentFixture<RelatedResourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatedResourcesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelatedResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
