import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowledgeCenterModalComponent } from './knowledge-center-modal.component';

describe('KnowledgeCenterModalComponent', () => {
  let component: KnowledgeCenterModalComponent;
  let fixture: ComponentFixture<KnowledgeCenterModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnowledgeCenterModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KnowledgeCenterModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
