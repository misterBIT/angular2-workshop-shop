import {Injectable} from "@angular/core";
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {ShopService, IShopItem} from "./shop.service";
import {Observable} from "rxjs";
@Injectable()
export class StoreListResolver implements Resolve<IShopItem[]> {
	constructor(private storeSvc: ShopService) {
	}

	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IShopItem[]> {
		return this.storeSvc.getItems();
	}
}
