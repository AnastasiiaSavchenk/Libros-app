import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrosLista } from './libros-lista';

describe('LibrosLista', () => {
  let component: LibrosLista;
  let fixture: ComponentFixture<LibrosLista>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LibrosLista]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibrosLista);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});