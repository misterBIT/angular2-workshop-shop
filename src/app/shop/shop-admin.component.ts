import {Component, OnInit} from '@angular/core';
import {ShopService, IShopItem} from "./shop.service";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {select} from "ng2-redux";

@Component({
	selector: 'store-admin',
	template: `<h1>Store Admin</h1>
				<store-admin-list [items]="items$|async"></store-admin-list>
				<router-outlet></router-outlet>
`
})
export class ShopAdminComponent implements OnInit {
	@select() private items$: IShopItem[];

	ngOnInit(): void {
	}

}
