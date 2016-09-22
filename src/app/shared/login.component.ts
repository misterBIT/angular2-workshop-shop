import {Component, ChangeDetectionStrategy}   from '@angular/core';
import {select} from "ng2-redux";
import {Observable} from "rxjs";
import {LoginActions} from "./login.actions";

@Component({
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
    <h2>LOGIN</h2>
    <p>{{message$|async}}</p>
    <p>
      <button (click)="login()"  *ngIf="!(login$|async)">Login</button>
      <button (click)="logout()" *ngIf="login$|async">Logout</button>
    </p>`
})
export class LoginComponent {

	@select(['login', 'isLoggedIn']) login$: Observable<boolean>;
	@select(['login', 'loginRequestPending']) requestPending$: Observable<boolean>;

	private message$: Observable<string> = Observable.combineLatest(this.login$, this.requestPending$)
		.map(([loginState,pendingRequest]) => (pendingRequest)
			? 'Trying to login.... ' :
			`Logged ${(loginState) ? 'in' : 'out' }`);

	constructor(private loginActions: LoginActions) {
	}


	login() {
		this.loginActions.loginAction();
	}

	logout() {
		this.loginActions.logoutAction();
	}
}

