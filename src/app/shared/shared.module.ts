import {NgModule} from "@angular/core";
import {HttpModule} from "@angular/http";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

import {ToastModule} from "ng2-toastr";
import '!!style!css!ng2-toastr/bundles/ng2-toastr.min.css';

let sharedModules = [CommonModule, FormsModule, ReactiveFormsModule, HttpModule, ToastModule];
let commonPipes = [];
let commonDirectives = [];

@NgModule({
	declarations: [...commonPipes, ...commonDirectives],
	imports: sharedModules,
	exports: [...commonDirectives, ...commonPipes, ...sharedModules]
})
export class SharedModule {
}
