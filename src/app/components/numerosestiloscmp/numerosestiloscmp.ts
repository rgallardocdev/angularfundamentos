import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-numerosestilos',
    standalone: false,
    styleUrl: './numerosestiloscmp.css',
    templateUrl: './numerosestiloscmp.html'
 })

export class NumerosEstilosCmp implements OnInit {

    numeros: number[];
    numerosPares: string;
    numerosImpares: string;
    arrayPares: number[];
    arrayImpares: number[];

    constructor() { 
        this.numeros = [1, 22, 31, 43, 52, 64, 70];
        this.numerosPares = "";
        this.numerosImpares = "";
        this.arrayPares = [];
        this.arrayImpares = [];
    }

    generarNumero(): void{
        let numero = Math.floor(Math.random() * 100) + 1;
        this.numeros.push(numero);
    }

    comprobarNumeros(): void{
        let numPares = "";
        let numImpares = "";
        let contadorPares = 0;
        let contadorImpares = 0;
        for (let _numero of this.numeros){
            if (_numero % 2 == 0){
                numPares += _numero + ",";
                this.arrayPares[contadorPares] = _numero;
                contadorPares++;
            }else{
                numImpares += _numero + ",";
                this.arrayImpares[contadorImpares] = _numero;
                contadorImpares++;
            }
        }
        this.numerosPares = numPares;
        this.numerosImpares = numImpares;
    }

    ngOnInit() { }
}