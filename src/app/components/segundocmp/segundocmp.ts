import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-segundo',
    standalone: false,
    templateUrl: './segundocmp.html',
    styleUrl: './segundocmp.css'
})

export class SegundoCmp implements OnInit {

    nombre: string;
    diaSemana: string;
    numero: number;
    
    constructor() {
        this.nombre = "Clase";
        this.diaSemana = "lunes";
        this.numero = 26;
    }

    ngOnInit() { }
}