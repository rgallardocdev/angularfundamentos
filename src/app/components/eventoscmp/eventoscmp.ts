import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-eventos',
    standalone: false,
    templateUrl: './eventoscmp.html'
})

export class EventosCmp implements OnInit {
    
    mensaje:string;

    constructor() { 
        this.mensaje = "Hoy es martes";
        console.log("Soy el constructor");

    }

    cambiarMensaje(): void {
        this.mensaje = "y mañana miercoles";
    }

    ngOnInit() {
        console.log("Soy el ngOnInit");
    }

    ngDoCheck() {
        console.log("Soy el ngDoCheck");
    }

}