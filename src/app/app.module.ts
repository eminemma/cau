import { ConfirmarVentanaService } from './services/confirmar-ventana.service';
import { ConfirmarVentanaComponent } from './components/confirmar-ventana.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
//Rutas
import { routing, appRoutingProviders } from './app.routing';

//Componentes
import { AppComponent } from './app.component';
import { UsuariosListComponent } from './components/usuarios.component';
@NgModule({
  declarations: [
    AppComponent,
    UsuariosListComponent,
    ConfirmarVentanaComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing
  ],
  providers: [
    appRoutingProviders,
    ConfirmarVentanaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
