import {Injectable} from "@angular/core";
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {ShopService, IShopItem} from "./shop.service";
@Injectable()
export class ShopListResolver implements Resolve<IShopItem[]> {
	constructor(private shopSvc: ShopService) {
	}

	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<IShopItem[]> {
		return this.shopSvc.getItems();
	}
}
