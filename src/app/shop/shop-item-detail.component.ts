import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IShopItem} from "./shop.model";
import {ShopService} from "./shop.service";

@Component({
	selector: 'shop-item-detail',
	template: `<h1>Details for {{item?.title}}</h1>
			   <h3>{{item?.price}}</h3>`
	//implement next item here
})
export class ShopItemDetailComponent implements OnInit {
	private item: IShopItem;

	constructor(private route: ActivatedRoute, private shop: ShopService) {
	}

	ngOnInit() {
		this.shop.getItem(this.route.snapshot.params['id']).then((item)=> {
			this.item = item;
		});
	}
}
