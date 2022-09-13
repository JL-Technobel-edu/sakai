import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Binding1Component } from './binding1.component';

describe('Binding1Component', () => {
  let component: Binding1Component;
  let fixture: ComponentFixture<Binding1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Binding1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Binding1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
