import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {select} from "ng2-redux";
import {IShopState} from "./shop.initialState";
import {IShopItem} from "./shop.service";
import {Observable} from "rxjs";
import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/exhaust'
import 'rxjs/add/operator/expand'
import 'rxjs/add/operator/filter'
import 'rxjs/add/operator/find'
import {ShopActions} from "./shop.actions";
@Component({
	selector: 'shop-item-detail-container',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `<store-item-detail (next)="onNext($event)" [item]="item$|async"></store-item-detail> `
})
export class ShopDetailContainer implements OnInit {
	@select((state: IShopState)=> state.items) private items$;
	item$: Observable<IShopItem>;

	constructor(private route: ActivatedRoute,private shopActions:ShopActions) {
	}

	onNext(event) {
		this.shopActions.showNextItem(event);
	}

	ngOnInit() {
		this.item$ = this.route.params
			.map(params=>params['id'])
			.switchMap(id => <Observable <IShopItem>> this.items$.mergeMap(itemsArr=> {
				return Observable.from(itemsArr).find((item: IShopItem) => {
					return item._id === id;
				})
			}))
			.do(id=>console.log('map to ', id))
	}


}