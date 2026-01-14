import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Libro {
  id?: number; 
  titulo: string;
  autor: string;
  descripcion?: string;
}

@Injectable({ providedIn: 'root' })
export class LibroService {
  private libros: Libro[] = [
    { id: 1, titulo: 'Don Quijote', autor: 'Cervantes', descripcion: 'Clásico español' },
    { id: 2, titulo: '1984', autor: 'Orwell', descripcion: 'Distopía' },
    { id: 3, titulo: 'It', autor: 'Stephen King', descripcion: 'Terror' }
  ];

  getLibros(): Observable<Libro[]> {
    return of(this.libros);
  }

  getLibroById(id: number): Observable<Libro | undefined> {
    return of(this.libros.find(l => l.id === id));
  }

  createLibro(libro: Libro): Observable<Libro> {
    libro.id = this.libros.length + 1;
    this.libros.push(libro);
    return of(libro);
  }

  deleteLibro(id: number): Observable<void> {
    this.libros = this.libros.filter(l => l.id !== id);
    return of();
  }

  updateLibro(libro: Libro): Observable<Libro> {
  const index = this.libros.findIndex(l => l.id === libro.id);
  if (index !== -1) {
    this.libros[index] = libro;
  }
  return of(libro);
}
}