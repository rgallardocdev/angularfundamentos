import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'app-formSaludoComponent',
    standalone: false,
    templateUrl: 'formSaludoComponent.html',
    styleUrl: 'formSaludoComponent.css'
})

export class FormSaludoComponent implements OnInit {

    //el @ViewChild es como el document.getElementById("cajaNombre"):
    //crea un objeto del elemento "cajaNombre" que tengo en el html
    //para luego recuperar su valor: this.cajaNombre.nativeElement.value;
    @ViewChild ("cajaNombre") cajaNombre!: ElementRef;
    @ViewChild ("cajaNumero") cajaNumero!: ElementRef;
    @ViewChild ("cajaNumero1") cajaNumero1!: ElementRef;
    @ViewChild ("cajaNumero2") cajaNumero2!: ElementRef;
    @ViewChild ("cajaNombreListado") cajaNombreListado!: ElementRef;

    mensaje!: string; //esta variable no hace falta inicializarla porque lleva el !
    mensajeSuma: string;
    listadoNombres: string[];

    constructor() {
        this.mensajeSuma = ""; //esta variable la inicializo en el constructor
        this.listadoNombres = [];
     }

    ngOnInit() { }

    mostrarNombre(): void {
        let nombre = this.cajaNombre.nativeElement.value;
        if (nombre == ""){
            alert("Debe introducir un nombre.");
        }
        else{
            this.mensaje = `El nombre es: ${nombre}`;
        }
    }

    mostrarNumero(): void {
        let numero = this.cajaNumero.nativeElement.value;
        alert(`El doble del numero ${numero} es: ${parseInt(numero) * 2}`);
    }

    sumarNumeros(numero1: string): void {
        // El primer valor se lo paso por parametro
        // let numero1 = this.cajaNumero1.nativeElement.value;
        let numero2 = this.cajaNumero2.nativeElement.value;
        if (numero1 == "" || numero2 == ""){
            alert("Debe introducir 2 numeros");
        }
        else{
            let suma = parseInt(numero1) + parseInt(numero2);
            this.mensajeSuma = `La suma de los numeros (${numero1} + ${numero2}) = ${suma}`;
        }
    }

    mostrarNombreListado(): void {
        let nombreListado = this.cajaNombreListado.nativeElement.value;
        if (nombreListado == ""){
            alert("Debe introducir un nombre");
        }
        else {
            console.log(nombreListado);
            this.listadoNombres.push(nombreListado);
            console.log(this.listadoNombres);
        }
    }
}