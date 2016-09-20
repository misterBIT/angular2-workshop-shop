import {Injectable} from "@angular/core";
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {StoreService, IStoreItem} from "./store.service";
@Injectable()
export class StoreListResolver implements Resolve<IStoreItem[]> {
	constructor(private storeSvc: StoreService) {
	}

	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<IStoreItem[]> {
		return this.storeSvc.getItems();
	}
}
