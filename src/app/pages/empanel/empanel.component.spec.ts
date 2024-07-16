import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpanelComponent } from './empanel.component';

describe('EmpanelComponent', () => {
  let component: EmpanelComponent;
  let fixture: ComponentFixture<EmpanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
