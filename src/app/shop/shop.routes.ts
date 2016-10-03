import {ShopFrontComponent} from "./shop-front.component";
import {Routes} from "@angular/router";
import {ShopAdminComponent} from "./shop-admin.component";
import {ShopListComponent} from "./shop-list.component";
import {AuthGuard} from "../shared/auth.guard";
import {ShopListResolver} from "./shop-list.resolver";
import {ShopItemEditComponent} from "./shop-item-edit-component";
import {ShopItemDetailComponent} from "./shop-item.component";

export const shopRoutes: Routes = [
	{
		path: 'shop', component: ShopFrontComponent, children: [
		{path: '', component: ShopListComponent, resolve: {items: ShopListResolver}},
		{path: ':id', component: ShopItemDetailComponent}

	]
	},
	{
		path: 'shopAdmin', component: ShopAdminComponent, canActivate: [AuthGuard], resolve: {items: ShopListResolver}, children: [
		{path: 'add', component: ShopItemEditComponent},
		{path: 'edit/:id', component: ShopItemEditComponent},
		{path: ''}
	]
	},
];
