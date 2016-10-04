import {Injectable} from "@angular/core";
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {IShopItem} from "./shop.model"; import {ShopService, } from "./shop.service";
@Injectable()
export class ShopListResolver implements Resolve<IShopItem[]> {
	constructor(private shopService: ShopService) {
	}

	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<IShopItem[]> {
		return this.shopService.getItems();
	}
}
