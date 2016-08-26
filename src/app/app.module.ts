
import { NgModule }      from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { HomeComponent }  from './home/home.component';
import { ChatRoomComponent } from './chat/chat-room.component';


import { MonsterModule }  from './monster/monster.module';

import { routing } from './app.routes';


@NgModule({
  imports: [ BrowserModule, ReactiveFormsModule, HttpModule, MonsterModule, routing],       // module dependencies
  declarations: [ AppComponent, HomeComponent, ChatRoomComponent],   // components and directives
  bootstrap: [ AppComponent ],     // root component
  providers: [ ]                    // services
})
export class AppModule { }

