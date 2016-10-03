import {Component, OnInit} from '@angular/core';
import {Input} from "@angular/core";
import {IShopItem} from "./shop.service";

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

	constructor() {
	}

	ngOnInit() {

	}

	edit() {

	}

	delete() {

	}

}