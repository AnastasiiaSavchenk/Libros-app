import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LibroService, Libro } from '../services/libro';

@Component({
  selector: 'app-libro-formulario',
  templateUrl: './libro-formulario.html',
  styleUrls: ['./libro-formulario.css'],
  standalone: false
})
export class LibroFormulario implements OnInit {
  libro: Libro = { titulo: '', autor: '', descripcion: '' };
  id?: number;
  modo: 'crear' | 'editar' = 'crear'; 

  constructor(
    private libroService: LibroService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

ngOnInit(): void {
  this.id = Number(this.route.snapshot.paramMap.get('id'));
  if (this.id) {
    this.modo = 'editar';
    this.libroService.getLibroById(this.id).subscribe(data => {
      if (data) this.libro = data;
    });
  }
}

  guardar() {
    if (this.libro.id) {
      this.libroService.updateLibro(this.libro).subscribe(() => {
        console.log('Libro actualizado');
        this.router.navigate(['/libros-lista']);
      });
    } else {
      this.libroService.createLibro(this.libro).subscribe(() => {
        console.log('Libro creado');
        this.router.navigate(['/libros-lista']);
      });
    }
  }
}