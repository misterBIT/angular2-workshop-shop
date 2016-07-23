import { Component, OnInit, ViewChildren } from '@angular/core';
import {MonsterService} from './monster.service';
import {MonsterModel} from './monster.model';
import {FilterByPipe} from '../shared/pipes/filter-list.pipe';
import {MonsterFilterComponent} from './monster-filter.component';
import {MonsterDetailsComponent} from './monster-details.component';

@Component({
  moduleId: module.id,
  styleUrls: [`monster.css`],
  pipes: [FilterByPipe],
  directives: [MonsterFilterComponent, MonsterDetailsComponent],
  // selector: 'monster-list',
  template: `
    <section>
      <h2>Monsters</h2>

      <monster-filter (filterChange)="filter = $event"></monster-filter>

      <a routerLink="/monster/edit" class="btn btn-primary">+ Add Monster</a>
      <ul>
        <!--<li *ngFor="let monster of monsters | filterBy:filter">-->
        <li *ngFor="let monster of monsters | filterBy:filter">
            <monster-details [monster]="monster"></monster-details>
            <div class="text-center">
              <button class="btn btn-danger" (click)="removeMonster(monster.id)">Delete</button>
              <a routerLink="/monster/edit/{{monster.id}}" class="btn btn-success">Edit</a>
            </div>
        </li>
      </ul>
    </section>


  `
})
export class MonsterListComponent implements OnInit {
  private filter = {byName: '', byPower: ''};
  private monsters : MonsterModel[] = [];

  constructor(private monsterService : MonsterService) { }

  ngOnInit() {
    const prmMonsters = this.monsterService.query();

    prmMonsters.then((monsters : MonsterModel[]) => {
      this.monsters = monsters;
    });

    prmMonsters.catch(err => {
      alert('Sorry,cannot load the monsters, try again later');
      console.log('Cought an error in MonsterList', err);
    });
  }
  removeMonster(monsterId : string) {
    this.monsterService.remove(monsterId)
      .then((monsters : MonsterModel[])=>{
        this.monsters = monsters;
      });
  }
}
