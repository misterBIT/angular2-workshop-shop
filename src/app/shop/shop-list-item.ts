import {Component, Input} from "@angular/core";
import {IShopItem} from "./shop.model";

@Component({
	selector: 'shop-list-item',
	template: `<div>{{item.title}} - <span>{{item.price|currency:'USD':true}}</span><ng-content></ng-content></div>`
})
export class StoreListItemComponent {
	@Input() item: IShopItem;
}