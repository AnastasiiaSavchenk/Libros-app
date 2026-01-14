import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LibroService, Libro } from '../services/libro';

@Component({
  selector: 'app-libro-detalle',
  templateUrl: './libro-detalle.html',
  standalone: false,
  styleUrls: ['./libro-detalle.css']
})
export class LibroDetalle implements OnInit {
  libro?: Libro;

  constructor(
    private route: ActivatedRoute,
    private libroService: LibroService
  ) {}
  
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.libroService.getLibroById(id).subscribe({
        next: data => this.libro = data,
        error: err => console.error('Error al cargar libro', err)
      });
    }
  }
}