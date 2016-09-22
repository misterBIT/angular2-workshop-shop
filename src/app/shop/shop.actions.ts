import {Injectable} from "@angular/core";
import {IShopItem, ShopService} from "./shop.service";
import {Action} from "redux";
import {IShopState} from "./shop.initialState";
import {NgRedux} from "ng2-redux";
import {Router} from "@angular/router";
export interface StoreAction extends Action {
	type: string;
	payload?: any;
}
@Injectable()
export class ShopActions {
	static LOAD_SHOP_ITEMS = "LOAD_SHOP_ITEMS";
	static SHOP_ITEMS_LOADED = "SHOP_ITEMS_LOADED";
	static SHOP_ITEMS_FAILED_TO_LOAD = "SHOP_ITEMS_FAILED_TO_LOAD";
	static ITEM_ADDED_TO_CART = "ITEM_ADDED_TO_CART";
	static ITEM_REMOVED_FROM_CART = "ITEM_REMOVED_FROM_CART";
	static ITEM_ADMIN_REMOVED = "ITEM_ADMIN_REMOVED";
	static ITEM_ADMIN_ADDED = "ITEM_ADMIN_ADDED";

	constructor(private shopSvc: ShopService, private ngRedux: NgRedux<IShopState>, private router: Router) {

	}

	addItemToCart(item: IShopItem) {
		this.ngRedux.dispatch(<StoreAction>{type: ShopActions.ITEM_ADDED_TO_CART, payload: item});
	}

	removeItemFromCart(index: Number) {
		this.ngRedux.dispatch(<StoreAction>{type: ShopActions.ITEM_REMOVED_FROM_CART, payload: index});
	}

	addItemToShop(item: IShopItem) {
		this.ngRedux.dispatch(<StoreAction> {type: ShopActions.ITEM_ADMIN_ADDED, payload: item});
	}

	removeItemFromShop(item: IShopItem) {
		this.ngRedux.dispatch(<StoreAction> {type: ShopActions.ITEM_ADMIN_REMOVED, payload: item});
	}

	loadShopItems() {
		this.ngRedux.dispatch(<StoreAction>{type: ShopActions.LOAD_SHOP_ITEMS});
		let sub = this.shopSvc.getItems()
			.subscribe((items)=> {
				this.ngRedux.dispatch(<StoreAction>{type: ShopActions.SHOP_ITEMS_LOADED, payload: items});
			}, (err)=> {
				this.ngRedux.dispatch(<StoreAction>{type: ShopActions.SHOP_ITEMS_FAILED_TO_LOAD, payload: err});
			}, ()=>sub.unsubscribe())
	}

	showNextItem(item: IShopItem) {
		let items = this.ngRedux.getState().items;
		let index = items.indexOf(item);
		let nextIndex = (index === items.length - 1) ? 0 : index + 1;
		this.router.navigate(['shop', items[nextIndex]._id]);

	}
}