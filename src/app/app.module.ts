
import { NgModule }      from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, REACTIVE_FORM_PROVIDERS } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { MonsterListComponent }  from './monster/monster-list.component';
import { MonsterEditComponent }  from './monster/monster-edit.component';
import { MonsterComponent }  from './monster/monster.component';
import { ChatRoomComponent } from './chat/chat-room.component';
import { PetsApp } from './pets/pets-app';

import {MonsterService} from "./monster/monster.service";
import {MonsterResolver} from "./monster/monster.resolver";

import { routing } from './app.routes';


@NgModule({
  imports: [ BrowserModule, routing, FormsModule, HttpModule],       // module dependencies
  declarations: [ AppComponent, MonsterComponent, MonsterListComponent, MonsterEditComponent, PetsApp, ChatRoomComponent],   // components and directives
  bootstrap: [ AppComponent ],     // root component
  providers: [ REACTIVE_FORM_PROVIDERS, MonsterService, MonsterResolver ]                    // services
})
export class AppModule { }

// known issues
// monster.scss is not loading
// 
