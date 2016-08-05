import {Component, OnInit, Input} from '@angular/core';
import {MonsterModel} from './monster.model';

@Component({
	selector : 'monster-thumb',
	styleUrls: [`monster.css`],
	inputs   : ['monster'],
	template : `
          <section>
            <p>{{monster.name}}</p>
            <a routerLink="/monster/{{monster.id}}/{{monster.name}}">
              <img class="imgMonster" *ngIf="url" [src]="url" />
            </a>
            <h6>Power: {{monster.power}}</h6>

          </section>
          `

})
export class MonsterThumbComponent implements OnInit {
	@Input()
	private monster:MonsterModel;
	private url:string;

	constructor() {
	}

	ngOnInit() {
		this.url = this.monster.getImgUrl();
	}

}
