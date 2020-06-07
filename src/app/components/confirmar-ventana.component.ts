import { Component, Input } from '@angular/core';
import { ConfirmarVentanaService } from '../services/confirmar-ventana.service';

@Component({
  selector: 'app-confirmar-ventana',
  templateUrl: '../views/confirmar-ventana.component.html',
  styleUrls: ['../components/confirmar-ventana.component.css']
})
export class ConfirmarVentanaComponent {
  message: any;
  constructor(
      private confirmarVentanaService: ConfirmarVentanaService
  ) { }

  ngOnInit() {
      this.confirmarVentanaService.getMessage().subscribe(message => {
          this.message = message;
          console.log('mensaje');
      });
  }
}
