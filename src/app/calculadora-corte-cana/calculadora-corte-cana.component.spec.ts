import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraCorteCanaComponent } from './calculadora-corte-cana.component';

describe('CalculadoraCorteCanaComponent', () => {
  let component: CalculadoraCorteCanaComponent;
  let fixture: ComponentFixture<CalculadoraCorteCanaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalculadoraCorteCanaComponent]
    });
    fixture = TestBed.createComponent(CalculadoraCorteCanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
