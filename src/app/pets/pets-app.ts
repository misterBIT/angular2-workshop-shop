import {Component} from '@angular/core';
import {PetInput} from './pet-input.component';
import {PetList} from './pet-list.component';
import {PetService} from './pet.service';
@Component({
	selector  : 'pets-app',
	template  : `
        <pet-input></pet-input>
        <pet-list [letter]="letter"></pet-list>
    `,
	directives: [PetInput, PetList],
	providers : [PetService]
})
export class PetsApp {


}



