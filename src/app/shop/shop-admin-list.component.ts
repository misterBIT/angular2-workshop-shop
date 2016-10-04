import {Component, OnInit} from '@angular/core';
import {Input} from "@angular/core";
import {IShopItem} from "./shop.model";
import {ShopService} from "./shop.service";
import {Router} from "@angular/router";

@Component({
	selector: 'shop-admin-list',
	template: `<shop-list-item [item]="item" *ngFor="let item of items">
						<button (click)="edit(item)">Edit</button>
						<button (click)="delete(item)">Delete</button>
		     </shop-list-item>
			<button routerLink="add">Add item to Shop</button>`
})
export class ShopAdminListComponent implements OnInit {

	@Input() items: IShopItem[];

	constructor(private shopService: ShopService, private router: Router) {
	}

	ngOnInit() {

	}

	edit(item: IShopItem) {
		this.router.navigate(['shopAdmin/edit', item._id]);
	}

	delete(item) {
		this.shopService.removeItemFromShop(item);
	}

}