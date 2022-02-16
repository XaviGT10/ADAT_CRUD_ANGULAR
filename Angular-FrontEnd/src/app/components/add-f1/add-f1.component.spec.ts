import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddF1Component } from './add-f1.component';

describe('AddF1Component', () => {
  let component: AddF1Component;
  let fixture: ComponentFixture<AddF1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddF1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddF1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
