import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Four0four3Component } from './four0four3.component';

describe('Four0four3Component', () => {
  let component: Four0four3Component;
  let fixture: ComponentFixture<Four0four3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Four0four3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Four0four3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
