import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from "./userAuth/login.component";
import {RegistrationComponent} from "./userAuth/register.component";


export const routes: Routes = [
	{path: '', redirectTo: 'home', pathMatch: 'full'},
	{path: 'home', component: HomeComponent},
	{path: 'login', component: LoginComponent},
	{path: 'register', component: RegistrationComponent}
];
