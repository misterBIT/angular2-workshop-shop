import {Component, OnInit} from '@angular/core';
import {IShopItem} from './shop.service';
import {Router} from "@angular/router";
import {select} from "ng2-redux";
import {ShopActions} from "./shop.actions";

@Component({
	selector: 'store-list',
	template: `<ul>
                	<store-list-item [item]="item" (buy)="buyItem($event)" (click)="gotoItem(item)" *ngFor="let item of items$|async">
                		 <button (click)="buyItem(item,$event)">BUY</button>
					</store-list-item> 
                </ul>`
})
export class ShopListComponent implements OnInit {
	@select() private items$: IShopItem[];

	constructor(private shopActions: ShopActions, private router: Router) {
	}

	ngOnInit() {
		this.shopActions.loadShopItems();
	}

	buyItem(item, $event) {
		this.shopActions.addItemToCart(item);
		$event.stopPropagation();
		return false;
	}

	gotoItem(item) {
		this.router.navigate(['shop', item._id]); // may also be reduxified....
	}
}
