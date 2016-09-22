import {Component, ChangeDetectionStrategy} from '@angular/core';
import {ShopService, IShopItem} from './shop.service';
import {Input} from '@angular/core/src/metadata/directives';
import {ShopActions} from "./shop.actions";

@Component({
	selector: 'shopping-cart',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `<h2>Shopping Cart</h2><ul>
<li *ngFor="let item of shoppingCart;let i = index">{{item.title}} <button (click)="shopActions.removeItemFromCart(i)">X</button></li>

</ul>
<span>Total Sum:{{sum}}</span>`
})
export class ShoppingCartCompoennt {
	@Input() shoppingCart: IShopItem[] = [];

	constructor(private shopActions: ShopActions) {
	}

	get sum() {
		return this.shoppingCart.reduce((acc, item)=>acc += (+item.price), 0);
	}

}
