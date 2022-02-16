import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListF1Component } from './list-f1.component';

describe('ListF1Component', () => {
  let component: ListF1Component;
  let fixture: ComponentFixture<ListF1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListF1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListF1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
