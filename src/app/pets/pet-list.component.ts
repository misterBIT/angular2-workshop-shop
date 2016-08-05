import {Component} from "@angular/core";
import {PetService, PetKind} from "./pet.service";
import {LetterSelector} from "./letter-selector.component";
import {PetComponent} from "./pet.component";
import {SearchPipe} from "./search.pipe";
import {PetKindSelector} from "./pet-kind-selector.component";

@Component({
    selector  : 'pet-list',
    directives: [PetComponent, LetterSelector, PetKindSelector],
    pipes     : [SearchPipe],
    template  : `
        <h2>Pets</h2>
        <petKind-selector (select)="kind = $event"></petKind-selector>
         <letter-selector (select)="letter = $event"></letter-selector>
        <ul>
            <li *ngFor="let currPet of petService.pets | search:letter:kind "  >
               <pet-render [pet]="currPet" (toggle)="petService.togglePet($event)"></pet-render>
            </li>
        </ul>
    `

})
export class PetList {
    letter = '';
    kind = PetKind.cat;


    constructor(private petService: PetService) {

    }
}

