import {Injectable}             from '@angular/core';
import {
	CanActivate, Router,
	ActivatedRouteSnapshot,
	RouterStateSnapshot
}    from '@angular/router';
import {NgRedux} from "ng2-redux";
import {LoginActions} from "./login.actions";
import {IShopState} from "../shop/shop.initialState";

@Injectable()
export class AuthGuard implements CanActivate {
	constructor(private ngrx: NgRedux<IShopState>, private router: Router,private loginActions:LoginActions) {
	}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
		if (this.ngrx.getState().login.isLoggedIn) {
			return true;
		}
		this.loginActions.storeRedirectUrl(state.url);
		// Store the attempted URL for redirecting

		// Create a dummy session id
		let sessionId = 123456789;

		// Set our navigation extras object
		// that contains our global query params and fragment
		let navigationExtras = {
			queryParams: {'session_id': sessionId},
			fragment: 'triedProtected'
		};

		// Navigate to the login page with extras
		this.router.navigate(['/login'], navigationExtras);
		return false;
	}
}
