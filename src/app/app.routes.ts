import { PLATFORM_DIRECTIVES } from '@angular/core';
import {HomeComponent} from './home/home.component';
import {MonsterListComponent} from './monster/monster-list.component';
import {MonsterComponent} from './monster/monster.component';
import {MonsterEditComponent} from './monster/monster-edit.component';
import {ChatRoomComponent} from './chat/chat-room.component';
import { Routes, RouterModule } from '@angular/router';
import {MonsterResolver} from "./monster/monster.resolver";

const routes: Routes = [
  {path: '',  redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  { path: 'monster', component: MonsterListComponent },
  { path: 'monster/edit', component: MonsterEditComponent },
  { path: 'monster/edit/:id', component: MonsterEditComponent,resolve: {monster: MonsterResolver} },
  { path: 'monster/:id/:name', component: MonsterComponent },
  { path: 'chat', component: ChatRoomComponent, outlet: 'aux'},
];


export const routing = RouterModule.forRoot(routes);

