import {StoreInitialState, IShopState} from "./shop.initialState";
import {ShopActions} from "./shop.actions";
import {IShopItem} from "./shop.service";
export function CartReducer(cartState: IShopItem[] = StoreInitialState.shoppingCart, action) {
	switch (action.type) {
		case ShopActions.ITEM_ADDED_TO_CART: {
			cartState = [...cartState, action.payload];
			break;
		}
		case ShopActions.ITEM_REMOVED_FROM_CART: {
			cartState = [...cartState.slice(0, action.payload), ...cartState.slice(action.payload + 1)];
			break;
		}
	}
	return cartState;
}
export function ItemsReducer(itemsState: IShopItem[] = StoreInitialState.items, action) {
	switch (action.type) {
		case ShopActions.SHOP_ITEMS_LOADED: {
			itemsState = action.payload;
			break;
		}
		case ShopActions.ITEM_ADMIN_ADDED: {
			itemsState = [...itemsState, action.payload];
			break;
		}
		case ShopActions.ITEM_ADMIN_REMOVED: {
			itemsState = [...itemsState.slice(0, action.payload), ...itemsState.slice(action.payload + 1)];
			break;
		}
	}
	return itemsState;
}

// export function shopReducer(shopState = StoreInitialState, action) { // combineReducers Naive...
// 	return {
// 		items: ItemReducer(shopState.items, action),
// 		shoppingCart: CartReducer(shopState.shoppingCart, action)
// 	}
// }