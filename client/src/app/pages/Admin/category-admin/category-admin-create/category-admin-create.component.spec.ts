import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryAdminCreateComponent } from './category-admin-create.component';

describe('CategoryAdminCreateComponent', () => {
  let component: CategoryAdminCreateComponent;
  let fixture: ComponentFixture<CategoryAdminCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryAdminCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryAdminCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
