import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {StoreFrontComponent} from './store/store-front.component';
import {LoginComponent} from "./shared/login.component";


export const routes: Routes = [
	{path: '', redirectTo: 'home', pathMatch: 'full'},
	{path: 'home', component: HomeComponent},
	{path: 'login', component: LoginComponent}
];
