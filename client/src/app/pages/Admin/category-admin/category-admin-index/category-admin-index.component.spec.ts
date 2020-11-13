import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryAdminIndexComponent } from './category-admin-index.component';

describe('CategoryAdminIndexComponent', () => {
  let component: CategoryAdminIndexComponent;
  let fixture: ComponentFixture<CategoryAdminIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryAdminIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryAdminIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
