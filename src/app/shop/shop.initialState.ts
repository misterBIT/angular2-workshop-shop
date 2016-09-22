import {IShopItem} from "./shop.service";
export interface IShopState {
	shoppingCart: IShopItem[];
	items: IShopItem[];
}
export const StoreInitialState: IShopState = {
	shoppingCart: [],
	items: []
};