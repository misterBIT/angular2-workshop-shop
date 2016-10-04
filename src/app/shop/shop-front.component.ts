import {Component, OnInit} from '@angular/core';
import {ShopService} from './shop.service';
import {IShopItem} from "./shop.model";

@Component({
	selector: 'shop-front',
	template: `<h3>Shop</h3>
				<div class="col-xs-9">
					<router-outlet></router-outlet>
				</div>
				<shopping-cart class="col-xs-3" (remove)="shopService.removeItemFromCart($event)" [shoppingCart]="shopService.shoppingCart"></shopping-cart>`
})
export class ShopFrontComponent implements OnInit {
	private items: IShopItem[];

	ngOnInit(): void {
		this.shopService.getItems().then((data)=> {
			this.items = data;
		})
	}

	constructor(private shopService: ShopService) {
	}

}
