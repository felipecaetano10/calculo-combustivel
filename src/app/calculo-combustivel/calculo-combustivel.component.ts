import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculo-combustivel',
  templateUrl: './calculo-combustivel.component.html',
  styleUrls: ['./calculo-combustivel.component.css']
})
export class CalculoCombustivelComponent implements OnInit {
  
  ngOnInit(): void {
  }

  distancia:number;
  litros:number;
  resultado:number;

  constructor() { 
    this.distancia=0;
    this.litros=0;
    this.resultado=0;
  }


  public calcular():void {
    this.resultado = this.distancia / this.litros;
    this.resultado = parseFloat(this.resultado.toFixed(2));
  }


}