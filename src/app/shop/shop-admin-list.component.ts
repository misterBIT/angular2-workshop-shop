import {Component, OnInit} from '@angular/core';
import {Input} from "@angular/core/src/metadata/directives";
import {IShopItem} from "./shop.service";
import {ShopActions} from "./shop.actions";

@Component({
	selector: 'store-admin-list',
	template: `<store-list-item [item]="item" *ngFor="let item of items">
						<button (click)="edit(item)">Edit</button>
						<button (click)="delete(item)">Delete</button>
		     </store-list-item>
			<button routerLink="add">Add item to Shop</button>`
})
export class ShopAdminListComponent implements OnInit {

	@Input() items: IShopItem[];

	constructor(private shopActions: ShopActions) {
	}

	ngOnInit() {
		this.shopActions.loadShopItems();
	}

	edit() {

	}

	delete() {

	}

}