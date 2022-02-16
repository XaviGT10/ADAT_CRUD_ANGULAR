import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeF1Component } from './home-f1.component';

describe('HomeF1Component', () => {
  let component: HomeF1Component;
  let fixture: ComponentFixture<HomeF1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeF1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeF1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
