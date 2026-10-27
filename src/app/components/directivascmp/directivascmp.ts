import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-directivas',
    standalone: false,
    templateUrl: './directivascmp.html'
})

export class DirectivasCmp implements OnInit {

    deportes: string[]

    constructor() { 
        this.deportes = ["Futbol", "Baloncesto", "Voleibol"]
    }

    ngOnInit() { }
}