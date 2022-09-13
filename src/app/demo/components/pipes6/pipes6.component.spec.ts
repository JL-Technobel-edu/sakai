import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pipes6Component } from './pipes6.component';

describe('Pipes6Component', () => {
  let component: Pipes6Component;
  let fixture: ComponentFixture<Pipes6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pipes6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pipes6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
