import {Component, OnInit} from '@angular/core';
import {IStoreItem, StoreService} from './store.service';
import {ActivatedRoute} from "@angular/router";

@Component({
	selector: 'store-front',
	template: `<h3>Store</h3>
				<router-outlet></router-outlet>
<shopping-cart [shoppingCart]="storeSvc.shoppingCart"></shopping-cart>`
})
export class StoreFrontComponent implements OnInit {

	ngOnInit(): void {

	}

	constructor(private storeSvc: StoreService) {
	}

}
