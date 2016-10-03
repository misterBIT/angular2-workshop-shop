import {Component, OnInit} from '@angular/core';
import {ShopService, IShopItem} from "./shop.service";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

@Component({
	selector: 'shop-admin',
	template: `<h1>shop Admin</h1>
	<store-admin-list [items]="items|async"></store-admin-list>
	<router-outlet></router-outlet>

`
})
export class ShopAdminComponent implements OnInit {
	ngOnInit(): void {
	}

}
