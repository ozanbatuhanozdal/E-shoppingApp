import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAdvertsComponent } from './home-adverts.component';

describe('HomeAdvertsComponent', () => {
  let component: HomeAdvertsComponent;
  let fixture: ComponentFixture<HomeAdvertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeAdvertsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAdvertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
