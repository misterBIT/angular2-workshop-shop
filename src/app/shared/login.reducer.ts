export interface LoginState {
	loginRequestPending: boolean;
	isLoggedIn: boolean;
	redirectUrl: string;
}
const LOGINSTATEKEY = 'isLoggedIn';

export function getPersistedLoginState() {
	let loginState = false;
	try {
		loginState = JSON.parse(window.localStorage.getItem(LOGINSTATEKEY))
	} catch (e) {
		console.log(e);
	}
	return loginState;
}

export function setPersistedLoginState(state) {
	window.localStorage.setItem(LOGINSTATEKEY, JSON.stringify(state));
}
export function removePresistedLogin() {
	window.localStorage.removeItem(LOGINSTATEKEY);
}

export const initialLoginState: LoginState = {
	loginRequestPending: false,
	isLoggedIn: getPersistedLoginState(),
	redirectUrl: ''
};
import {LoginActions} from "./login.actions";

export function LoginReducer(state: LoginState = initialLoginState, action) {
	switch (action.type) {
		case LoginActions.LOGIN_REQUEST:
			state = Object.assign({}, state, {loginRequestPending: true});
			break;
		case LoginActions.LOGIN_APPROVED:
			state = Object.assign({}, state, {loginRequestPending: false, isLoggedIn: true});
			break;
		case LoginActions.LOGOUT:
			state = Object.assign({}, state, {isLoggedIn: false});
			break;
		case LoginActions.STORE_REDIRECT:
			state = Object.assign({}, state, {redirectUrl: action.payload});
			break;
	}
	return state;
}