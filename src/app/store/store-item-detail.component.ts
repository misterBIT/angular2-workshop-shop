import {Component, OnInit} from '@angular/core';
import {Input, Output} from "@angular/core";
import {IStoreItem} from "./store.service";
@Component({
	selector: 'store-item-detail',
	template: `<div>{{item.title}} - <span>{{item.price|currency}}</span><ng-content></ng-content></div>`
})
export class StoreItemDetailComponent implements OnInit {
	@Input() item: IStoreItem;

	ngOnInit() {
	}

}