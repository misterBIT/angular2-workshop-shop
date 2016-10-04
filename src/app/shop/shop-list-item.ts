import {Component, Input} from "@angular/core";
import {IShopItem} from "./shop.model";

@Component({
	selector: 'shop-list-item',
	template: `<div class="row">
						<span class="col-xs-2"><ng-content></ng-content></span>
						<h5 class="col-xs-2">{{item.title}}</h5>
						<h5 class="col-xs-2"><span class="label label-default">{{item.price|currency:'USD':true}}</span></h5>
			</div>`
})
export class StoreListItemComponent {
	@Input() item: IShopItem;
}