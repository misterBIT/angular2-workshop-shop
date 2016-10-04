import {NgModule} from "@angular/core";
import {LoginComponent} from "./login.component";
import {AuthGuard} from "./auth.guard";
import {AuthService} from "./auth.service";
import {RegistrationComponent} from "./register.component";
import {SharedModule} from "../shared/shared.module";

@NgModule({
	declarations: [LoginComponent, RegistrationComponent],
	providers: [AuthGuard, AuthService],
	imports: [SharedModule],
	exports: [LoginComponent, RegistrationComponent]
})
export class UserAuthModule {

}