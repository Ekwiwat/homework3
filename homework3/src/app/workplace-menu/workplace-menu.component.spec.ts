import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkplaceMenuComponent } from './workplace-menu.component';

describe('WorkplaceMenuComponent', () => {
  let component: WorkplaceMenuComponent;
  let fixture: ComponentFixture<WorkplaceMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkplaceMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkplaceMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
