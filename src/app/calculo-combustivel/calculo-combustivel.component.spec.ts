import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculoCombustivelComponent } from './calculo-combustivel.component';

describe('CalculoCombustivelComponent', () => {
  let component: CalculoCombustivelComponent;
  let fixture: ComponentFixture<CalculoCombustivelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculoCombustivelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculoCombustivelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
