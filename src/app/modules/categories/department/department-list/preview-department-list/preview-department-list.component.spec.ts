import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewDepartmentListComponent } from './preview-department-list.component';

describe('PreviewDepartmentListComponent', () => {
  let component: PreviewDepartmentListComponent;
  let fixture: ComponentFixture<PreviewDepartmentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviewDepartmentListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewDepartmentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
