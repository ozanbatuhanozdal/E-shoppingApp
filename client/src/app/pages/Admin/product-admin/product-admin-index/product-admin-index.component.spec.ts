import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAdminIndexComponent } from './product-admin-index.component';

describe('ProductAdminIndexComponent', () => {
  let component: ProductAdminIndexComponent;
  let fixture: ComponentFixture<ProductAdminIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductAdminIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAdminIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
