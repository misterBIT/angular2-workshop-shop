import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import {PetModel} from './pet.service';

@Component({
    selector: 'pet-render',
    encapsulation: ViewEncapsulation.Emulated,
    template: `
        <style>
            .awake {
                color:orange;
            }
            img {max-width:200px}      
        </style>
        <div [ngClass]="{awake: pet.awake}">
            {{pet.name}}
            <img [src]="pet.getImgUrl()" />
            <input type="checkbox" [checked]="pet.awake" (click)="toggle.emit(pet)" > Awake?
        </div>
    `
})
export class PetComponent implements OnInit {
    @Input() pet:PetModel;
    @Output() toggle = new EventEmitter<PetModel>();
    constructor() { }

    ngOnInit() { }

}