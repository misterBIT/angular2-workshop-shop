import {StoreFrontComponent} from "./store-front.component";
import {Routes} from "@angular/router";
import {StoreAdminComponent} from "./store-admin.component";
import {StoreListComponent} from "./store-list.component";
import {StoreItemComponent} from "./store-item.component";
import {StoreListResolver} from "./store-list.resolver";
import {AuthGuard} from "../shared/auth.guard";
export const storeRoutes: Routes = [
	{
		path: 'store', component: StoreFrontComponent, children: [
		{path: '', component: StoreListComponent, resolve: {items: StoreListResolver}},
		{path: ':id', component: StoreItemComponent}

	]
	},
	{path: 'storeAdmin', component: StoreAdminComponent, canActivate: [AuthGuard]},
];
