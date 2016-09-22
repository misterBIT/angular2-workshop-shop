import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {ShopFrontComponent} from './shop-front.component';
import {ShopService} from './shop.service';
import {ShopListComponent} from './shop-list.component';
import {ShoppingCartCompoennt} from './shopping-cart-compoenent';
import {ShopAdminComponent} from "./shop-admin.component";
import {RouterModule} from "@angular/router";
import {shopRoutes} from "./shop.routes";
import {ShopDetailComponent} from "./shop-item-detail.component";
import {StoreListResolver} from "./shop-list.resolver";
import {ShopActions} from "./shop.actions";
import {StoreListItemComponent} from "./shop-item.compoent";
import {ShopDetailContainer} from "./shop-item-detail.container";
import {ShopAdminListComponent} from "./shop-admin-list.component";
import {ShopItemEditComponent} from "./shop-item-edit.component";
@NgModule({
	providers: [ShopService, StoreListResolver, ShopActions],
	declarations: [ShopFrontComponent, ShopListComponent, ShoppingCartCompoennt, ShopAdminComponent, ShopDetailComponent, StoreListItemComponent, ShopDetailContainer, ShopAdminListComponent, ShopItemEditComponent],
	imports: [SharedModule, RouterModule.forChild(shopRoutes)],
	exports: [ShopFrontComponent, ShopAdminComponent],
})
export class StoreModule {
}
