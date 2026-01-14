import { Component, OnInit } from '@angular/core';
import { LibroService, Libro } from '../services/libro';

@Component({
  selector: 'app-libros-lista',
  templateUrl: './libros-lista.html',
  standalone: false,
  styleUrls: ['./libros-lista.css'],
})

export class LibrosLista implements OnInit {
  libros: Libro[] = [];
  filtro: string = '';
  constructor(private libroService: LibroService) {}

  ngOnInit(): void {
    this.cargarLibros();
  }

  cargarLibros() {
    this.libroService.getLibros().subscribe(
      data => this.libros = data,
      error => console.error(error)
    );
  }

eliminar(id: number) {
  this.libros = this.libros.filter(libro => libro.id !== id);

  this.libroService.deleteLibro(id).subscribe({
    next: () => console.log('Libro eliminado'),
    error: err => console.error('Error al eliminar', err)
  });
}
};