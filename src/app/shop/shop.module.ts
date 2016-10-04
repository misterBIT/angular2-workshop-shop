import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {ShopFrontComponent} from './shop-front.component';
import {ShopService} from './shop.service';
import {ShopListComponent} from './shop-list.component';
import {ShoppingCartCompoennt} from './shopping-cart.component';
import {ShopAdminComponent} from "./shop-admin.component";
import {RouterModule} from "@angular/router";
import {shopRoutes} from "./shop.routes";
import {ShopItemDetailComponent} from "./shop-item-detail.component";
import {ShopListResolver} from "./shop-list.resolver";
import {StoreListItemComponent} from "./shop-list-item";
import {ShopAdminListComponent} from "./shop-admin-list.component";
import {ShopItemEditComponent} from "./shop-item-edit-component";
@NgModule({
	providers: [ShopService, ShopListResolver],
	declarations: [ShopFrontComponent, ShopListComponent, StoreListItemComponent, ShopItemDetailComponent, ShoppingCartCompoennt,
		ShopAdminComponent, ShopAdminListComponent, ShopItemEditComponent],
	imports: [SharedModule, RouterModule.forChild(shopRoutes)],
	exports: [ShopFrontComponent, ShopAdminComponent],
})
export class shopModule {
}
