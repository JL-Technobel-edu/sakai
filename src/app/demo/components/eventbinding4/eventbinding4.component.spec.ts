import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Eventbinding4Component } from './eventbinding4.component';

describe('Eventbinding4Component', () => {
  let component: Eventbinding4Component;
  let fixture: ComponentFixture<Eventbinding4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Eventbinding4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Eventbinding4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
