import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {StoreFrontComponent} from './store-front.component';
import {StoreService} from './store.service';
import {StoreListComponent} from './store-list.component';
import {ShoppingCartCompoennt} from './shopping-cart-compoenent';
import {StoreAdminComponent} from "./store-admin.component";
import {RouterModule} from "@angular/router";
import {storeRoutes} from "./store.routes";
import {StoreItemComponent} from "./store-item.component";
import {StoreListResolver} from "./store-list.resolver";
@NgModule({
	providers: [StoreService, StoreListResolver],
	declarations: [StoreFrontComponent, StoreListComponent, ShoppingCartCompoennt, StoreAdminComponent, StoreItemComponent],
	imports: [SharedModule, RouterModule.forChild(storeRoutes)],
	exports: [StoreFrontComponent, StoreAdminComponent],
})
export class StoreModule {
}
