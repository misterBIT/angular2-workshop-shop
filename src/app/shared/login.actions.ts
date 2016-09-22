import {Injectable} from "@angular/core";
import {NgRedux} from "ng2-redux";
import {Router} from "@angular/router";
import {IShopState} from "../shop/shop.initialState";
import {setPersistedLoginState, removePresistedLogin} from "./login.reducer";
@Injectable()
export class LoginActions {
	public static STORE_REDIRECT = 'STORE_REDIRECT';
	public static LOGIN_REQUEST = 'LOGIN_REQUEST';
	public static LOGIN_APPROVED = 'LOGIN_APPROVED';
	public static LOGOUT = 'LOGOUT';

	constructor(private ngRedux: NgRedux<IShopState>, private router: Router) {
	}

	loginAction() {
		this.ngRedux.dispatch({type: LoginActions.LOGIN_REQUEST});
		setTimeout(()=> {
			this.ngRedux.dispatch({type: LoginActions.LOGIN_APPROVED});
			const loginState = this.ngRedux.getState().login;
			if (loginState.isLoggedIn) {
				setPersistedLoginState(loginState.isLoggedIn);
				// Get the redirect URL from our auth service
				// If no redirect has been set, use the default
				let redirect = loginState.redirectUrl ? loginState.redirectUrl : '/';

				// Redirect the user but keep params
				// 				let navigationExtras: NavigationExtras = {
				// 					preserveQueryParams: true,
				// 					preserveFragment: true
				// 				};
				//
				// 				this.router.navigate([redirect], navigationExtras);
				this.router.navigate([redirect]);
			}
		}, 2000)
	}

	logoutAction() {
		removePresistedLogin();
		this.ngRedux.dispatch({type: LoginActions.LOGOUT});
	}

	storeRedirectUrl(url) {
		this.ngRedux.dispatch({type: LoginActions.STORE_REDIRECT, payload: url});
	}
}