import {IShopItem} from "./shop.service";
import {LoginState, initialLoginState} from "../shared/login.reducer";
export interface IShopState {
	shoppingCart: IShopItem[];
	items: IShopItem[];
	login: LoginState;
}
export const StoreInitialState: IShopState = {
	shoppingCart: [],
	items: [],
	login: initialLoginState
};