import {Component, OnInit, ChangeDetectionStrategy, EventEmitter} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ShopService, IShopItem} from "./shop.service";
import {Input, Output} from "@angular/core/src/metadata/directives";

@Component({
	selector: 'store-item-detail',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `<h1>{{item.title}}</h1>
			   <h3>{{item.price}}</h3>
			   <button (click)="next.emit(item)"> Next Item</button>`
})
export class ShopDetailComponent implements OnInit {
	@Input() private item: IShopItem;

	@Output() next = new EventEmitter();

	constructor() {
	}

	ngOnInit() {
	}
}
