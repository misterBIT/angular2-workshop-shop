
import { NgModule }      from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, REACTIVE_FORM_PROVIDERS } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { HomeComponent }  from './home/home.component';

import { MonsterListComponent }  from './monster/monster-list.component';
import {MonsterFilterComponent} from "./monster/monster-filter.component";

import { MonsterEditComponent }  from './monster/monster-edit.component';
import { MonsterComponent }  from './monster/monster.component';
import { MonsterThumbComponent }  from './monster/monster-thumb.component';

import { ChatRoomComponent } from './chat/chat-room.component';

import {MonsterService} from "./monster/monster.service";
import {MonsterResolver} from "./monster/monster.resolver";
import {MonstersFilterByPipe} from "./monster/monsters.pipe";

import { routing } from './app.routes';


@NgModule({
  imports: [ BrowserModule, routing, FormsModule, HttpModule],       // module dependencies
  declarations: [ AppComponent, HomeComponent, MonsterComponent, MonsterListComponent, MonsterThumbComponent, MonsterEditComponent, ChatRoomComponent, MonsterFilterComponent, MonstersFilterByPipe],   // components and directives
  bootstrap: [ AppComponent ],     // root component
  providers: [ REACTIVE_FORM_PROVIDERS, MonsterService, MonsterResolver ]                    // services
})
export class AppModule { }

