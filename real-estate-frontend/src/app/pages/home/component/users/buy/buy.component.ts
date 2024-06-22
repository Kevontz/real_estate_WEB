import { Component } from '@angular/core';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent {
  valorCompra: number = 0;
  valorMinimo: number = 200000;
  valorMaximo: number = 1000000;

  opcao: string = 'avista';
  valorFinanciamento: number = 0;
  quantidadeParcelas: number = 1;
  parcelas: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  
  resultado: boolean = false;
  valorFinanciado: number = 0;
  totalComJuros: number = 0;

  setarOpcao(opcao: string) {
    this.opcao = opcao;
    this.resultado = false;
  }

  mostrarResultado() {
    this.resultado = true;
  }

  calcularFinanciamento() {
    if (this.opcao === 'financiamento') {
      const jurosMensal = 0.10;
      this.valorFinanciado = this.valorFinanciamento;
      this.totalComJuros = this.valorFinanciado * Math.pow(1 + jurosMensal, this.quantidadeParcelas);
      this.resultado = true;
    }
  }
}
