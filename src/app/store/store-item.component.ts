import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {StoreService, IStoreItem} from "./store.service";

@Component({
	selector: 'store-item',
	template: `<h1>{{item?.title}}</h1>
			   <h3>{{item?.price}}</h3>`
})
export class StoreItemComponent implements OnInit {
	private item: IStoreItem;

	constructor(private route: ActivatedRoute, private store: StoreService) {
	}

	ngOnInit() {
		this.store.getItem(this.route.snapshot.params['id']).then((item)=> {
			this.item = item;
		});
	}
}
