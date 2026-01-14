import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Home } from './home/home';
import { LibrosLista } from './libros-lista/libros-lista';
import { LibroDetalle } from './libro-detalle/libro-detalle';
import { LibroFormulario } from './libro-formulario/libro-formulario';

const routes: Routes = [
  { path: '', component: Home },          
  { path: 'libros-lista', component: LibrosLista },
  { path: 'libro-detalle/:id', component: LibroDetalle },
  { path: 'libro-formulario', component: LibroFormulario },
  { path: 'editar-libro/:id', component: LibroFormulario },
  { path: '**', component: Home }    
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);