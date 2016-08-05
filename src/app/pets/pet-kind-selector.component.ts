import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {PetKind} from "./pet.service";

@Component({
    selector: 'petKind-selector',
    styles  : [`:host{float:left ;}ul {list-style:none}`, `li {display:inline-block; padding:0 5px;}`, `.selected{color:red}`],
    template: `
    <select name="kind" [value]="kindSelected" (change)="selectKind($event)">
        <option *ngFor="let kind of kinds" [value]="kind">{{kindsObj[kind]}}
        </option>
    </select>
    `
})
export class PetKindSelector implements OnInit {
    @Output('select') selectEmitter = new EventEmitter(); // inputs/outputs can be renamed
    kindsObj = PetKind;
    kinds = Object.keys(PetKind).filter((v: any)=>!isNaN(v));

    kindSelected = PetKind.cat;

    constructor() {
    }

    selectKind(e) {
        this.kindSelected = e.target.value;
        this.selectEmitter.emit(this.kindSelected)
    }

    ngOnInit() {
        this.selectEmitter.emit(this.kindSelected);
    }

}