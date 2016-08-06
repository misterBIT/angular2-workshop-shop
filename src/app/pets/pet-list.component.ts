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
    styles    : [`input[name=awake] {margin:0;height: 15px;}`],
    template  : `
        <h2>Pets</h2>
        <petKind-selector (select)="kind = $event"></petKind-selector>
        <label class="form-group"><span class="control-label">Awake</span>
            <input class="form-control input-sm" type="checkbox" [(ngModel)]="awake" name="awake"/>
        </label>
        <letter-selector (select)="letter = $event"></letter-selector>
        <ul>
            <li *ngFor="let currPet of petService.pets | search:letter:kind:awake "  >
               <pet-render [pet]="currPet" (toggle)="petService.togglePet($event)"></pet-render>
            </li>
        </ul>
    `

})
export class PetList {
    awake = true;
    letter = '';
    kind = PetKind.cat;


    constructor(private petService: PetService) {

    }
}

