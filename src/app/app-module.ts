import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';

import { App } from './app';
import { LibrosLista } from './libros-lista/libros-lista';
import { LibroDetalle } from './libro-detalle/libro-detalle';
import { LibroFormulario } from './libro-formulario/libro-formulario';
import { Home } from './home/home';

@NgModule({
  declarations: [
    App,
    LibrosLista,
    LibroDetalle,
    LibroFormulario,
    Home
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [App]
})
export class AppModule {}