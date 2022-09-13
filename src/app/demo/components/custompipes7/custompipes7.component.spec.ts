import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Custompipes7Component } from './custompipes7.component';

describe('Custompipes7Component', () => {
  let component: Custompipes7Component;
  let fixture: ComponentFixture<Custompipes7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Custompipes7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Custompipes7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
