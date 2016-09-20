import {Component} from '@angular/core';
import {Input} from '@angular/core/src/metadata/directives';
import {IStoreItem, StoreService} from './store.service';
import {ActivatedRoute} from "@angular/router";

@Component({
	selector: 'store-list',
	template: `<ul>
                <li *ngFor="let item of items">{{item.title}} - <span>{{item.price|currency}}</span> <button (click)="buyItem(item)">BUY</button></li> 
                </ul>` ////convert to itemRenederComponent
})
export class StoreListComponent {
	private items: IStoreItem[];

	constructor(private shoppingSvc: StoreService, private route: ActivatedRoute) {
	}

	ngOnInit() {
		this.items = this.route.snapshot.data['items'];
	}

	buyItem(item) {
		this.shoppingSvc.buyItem(item);

	}
}
