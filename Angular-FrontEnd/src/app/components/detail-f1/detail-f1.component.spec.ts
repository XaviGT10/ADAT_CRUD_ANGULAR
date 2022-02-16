import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailF1Component } from './detail-f1.component';

describe('DetailF1Component', () => {
  let component: DetailF1Component;
  let fixture: ComponentFixture<DetailF1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailF1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailF1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
