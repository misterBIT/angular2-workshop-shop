import {ShopFrontComponent} from "./shop-front.component";
import {Routes} from "@angular/router";
import {ShopAdminComponent} from "./shop-admin.component";
import {ShopListComponent} from "./shop-list.component";
import {AuthGuard} from "../shared/auth.guard";
import {ShopDetailContainer} from "./shop-item-detail.container";
import {ShopItemEditComponent} from "./shop-item-edit.component";
export const shopRoutes: Routes = [
	{
		path: 'shop', component: ShopFrontComponent, children: [
		{path: '', component: ShopListComponent},
		{path: ':id', component: ShopDetailContainer}

	]
	},
	{
		path: 'shopAdmin', component: ShopAdminComponent, canActivate: [AuthGuard], children: [
		{path: 'add', component: ShopItemEditComponent},
		{path: 'edit/:id', component: ShopItemEditComponent},
		{path: ''}
	]
	},
];
