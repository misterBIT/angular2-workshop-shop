import {Component} from '@angular/core';
import {PetService, PetModel, PetKind} from './pet.service';

@Component({
    selector: 'pet-input',
    template: `
        <form (submit)="addPet()">
            Pet Name: <input type="text" name="name" [(ngModel)]="pet.name" />
            Pet Kind: <select name="kind" [(ngModel)]="pet.kind">
                                <option *ngFor="let kind of kinds" [value]="kind">{{kindsObj[kind]}}</option>
                    </select>
            <button> Add Pet </button>
        </form>
    `
})
export class PetInput {
    pet = new PetModel();
    kindsObj = PetKind;
    kinds = Object.keys(PetKind).filter((v: any)=>!isNaN(v));

    constructor(private petService: PetService) {
    }

    addPet() {
        this.petService.addPet(this.pet);
        console.log(this.petService.pets);
        this.pet = new PetModel({});
    }
}