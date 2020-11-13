import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendProductComponent } from './trend-product.component';

describe('TrendProductComponent', () => {
  let component: TrendProductComponent;
  let fixture: ComponentFixture<TrendProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
