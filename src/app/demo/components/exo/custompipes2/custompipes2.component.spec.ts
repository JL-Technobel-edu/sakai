import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Custompipes2Component } from './custompipes2.component';

describe('Custompipes2Component', () => {
  let component: Custompipes2Component;
  let fixture: ComponentFixture<Custompipes2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Custompipes2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Custompipes2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
