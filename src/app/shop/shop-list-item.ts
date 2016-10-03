import {Component, OnInit, EventEmitter} from '@angular/core';
import {Input, Output} from "@angular/core";
import {IShopItem} from "./shop.service";

@Component({
	selector: 'shop-list-item',
	template: `<div>{{item.title}} - <span>{{item.price|currency:'USD':true}}</span><ng-content></ng-content></div>`
})
export class StoreListItemComponent {
	@Input() item: IShopItem;
}