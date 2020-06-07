import { Component } from '@angular/core';
import { ConfirmarVentanaService } from '../services/confirmar-ventana.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: '../views/usuarios.component.html'
})
export class UsuariosListComponent {
  public titulo: string;
  constructor(private confirmarVentanaService: ConfirmarVentanaService){
    this.titulo = 'Usuarios';
  }
  showDialog() {
    this.confirmarVentanaService.confirmThis("Are you sure to delete?", function () {
      alert("Yes clicked");
    }, function () {
      alert("No clicked");
    })
  }
}
