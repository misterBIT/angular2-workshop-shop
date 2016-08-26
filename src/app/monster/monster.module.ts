
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {FILE_UPLOAD_DIRECTIVES, FileUploader} from 'ng2-file-upload';


import { MonsterListComponent }  from './monster-list.component';
import {MonsterFilterComponent} from "./monster-filter.component";

import { MonsterEditComponent }  from './monster-edit.component';
import { MonsterComponent }  from './monster.component';
import { MonsterThumbComponent }  from './monster-thumb.component';

import {MonsterService} from "./monster.service";
import {MonsterResolver} from "./monster.resolver";
import {MonstersFilterByPipe} from "./monsters.pipe";
import {routing } from "./monster.routes";




@NgModule({
  imports: [ BrowserModule, FormsModule, ReactiveFormsModule, HttpModule,  routing],       // module dependencies
  declarations: [  MonsterComponent, MonsterListComponent, MonsterThumbComponent, MonsterEditComponent, MonsterFilterComponent, MonstersFilterByPipe], 
  providers: [ MonsterService, MonsterResolver ]                    // services
})
export class MonsterModule { }

