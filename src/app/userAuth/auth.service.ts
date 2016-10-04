import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import {ToastsManager} from "ng2-toastr";
import {IUser} from "./user.model";
import {Router} from "@angular/router";
export interface ILoginDetails {
	username: string;
	password: string;
}
@Injectable()
export class AuthService {
	isLoggedIn: boolean = false;

	users: IUser[] = [];

	constructor(private toastsManager: ToastsManager, public router: Router) {
	}

	// store the URL so we can redirect after logging in
	redirectUrl: string;

	login(loginDetails: ILoginDetails) {
		return Observable.of(loginDetails)
			.delay(1000)
			.map(val => this.users.some((user)=>(user.username === val.username && user.password === val.password)))
			.do(val=> {
				this.isLoggedIn = val;
				if (!val) {
					this.toastsManager.error('Invalid Username or password!', 'Error!');
				}
			});
	}

	register(user: IUser) {
		this.users.push(user);
		this.router.navigate(['login']);
		this.toastsManager.info('User Registered, please login');
	}

	logout() {
		this.isLoggedIn = false;
	}
}
