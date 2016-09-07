import {NgModule} from "@angular/core";
import {HttpModule} from "@angular/http";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {ToastModule} from 'ng2-toastr';
import {FILE_UPLOAD_DIRECTIVES} from "ng2-file-upload";
let sharedModules = [BrowserModule, FormsModule, ReactiveFormsModule, HttpModule, ToastModule];
let commonPipes = [];
let commonDirectives = [FILE_UPLOAD_DIRECTIVES];

@NgModule({
	declarations: commonPipes.concat(commonDirectives),
	imports: sharedModules,
	exports: commonDirectives.concat(commonPipes, sharedModules)
})
export class SharedModule {
}
