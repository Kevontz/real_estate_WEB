import { Component } from '@angular/core';

@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.css']
})
export class RentComponent {
  valorAluguel: number = 0;
  mesesPermanencia: number = 1;
  valorMinimo: number = 500;
  valorMaximo: number = 5000;

  // Variáveis para armazenar o resultado
  resultado: boolean = false;
  totalEstimado: number = 0;

  calcularAluguel() {
    // Calcular o total estimado
    this.totalEstimado = this.valorAluguel * this.mesesPermanencia;

    // Mostrar o resultado
    this.resultado = true;
  }
}
