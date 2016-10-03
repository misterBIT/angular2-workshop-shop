import {Component, OnInit} from '@angular/core';
import {IShopItem} from "./shop.model";
import {ActivatedRoute} from "@angular/router";

@Component({
	selector: 'shop-admin',
	template: `<h1>shop Admin</h1>
	<shop-admin-list [items]="items"></shop-admin-list>
	<router-outlet></router-outlet>

`
})
export class ShopAdminComponent implements OnInit {
	items: IShopItem[];

	constructor(private route: ActivatedRoute) {
	}

	ngOnInit(): void {
		this.items = this.route.snapshot.data['items'];
	}

}
