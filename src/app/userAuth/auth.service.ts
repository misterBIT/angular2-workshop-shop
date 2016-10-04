import {Injectable} from '@angular/core';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import {ToastsManager} from "ng2-toastr";
export interface ILoginDetails {
	username: string;
	password: string;
}
@Injectable()
export class AuthService {
	isLoggedIn: boolean = false;

	constructor(private toastsManager: ToastsManager) {
	}

	// store the URL so we can redirect after logging in
	redirectUrl: string;

	login(loginDetails: ILoginDetails) {
		return Observable.of(loginDetails)
			.delay(1000)
			.map(val => {
				return (val.username.length > 3 && val.password.indexOf('$') !== -1);
			})
			.do(val=> {
				this.isLoggedIn = val;
				if (!val) {
					this.toastsManager.error('Invalid Username or password!', 'Error!');
				}
			})
	}

	logout() {
		this.isLoggedIn = false;
	}
}
