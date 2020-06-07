import { UsuariosListComponent } from './components/usuarios.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';


const appRoutes: Routes = [
  {
    path: '', component: AppComponent,

  },
  {
    path: 'usuarios', component: UsuariosListComponent,

  }
]

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
