import {NgModule} from "@angular/core";
import {HttpModule} from "@angular/http";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";

import {CommonModule} from "@angular/common";
let sharedModules = [CommonModule, FormsModule, ReactiveFormsModule, HttpModule];
let commonPipes = [];
let commonDirectives = [];

@NgModule({
    declarations: [...commonPipes, ...commonDirectives],
    imports: sharedModules,
    exports: [...commonDirectives, ...commonPipes, ...sharedModules]
})
export class SharedModule {
}
