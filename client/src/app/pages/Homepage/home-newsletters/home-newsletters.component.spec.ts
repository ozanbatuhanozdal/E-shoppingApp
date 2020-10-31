import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNewslettersComponent } from './home-newsletters.component';

describe('HomeNewslettersComponent', () => {
  let component: HomeNewslettersComponent;
  let fixture: ComponentFixture<HomeNewslettersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeNewslettersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeNewslettersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
