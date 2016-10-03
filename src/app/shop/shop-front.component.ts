import {Component, OnInit} from '@angular/core';
import {ShopService} from './shop.service';

@Component({
	selector: 'shop-front',
	template: `<h3>shop</h3>
				<div class="col-xs-9">
					<router-outlet></router-outlet>
				</div>
				<shopping-cart class="col-xs-3" (remove)="shopService.removeItem($event)" [shoppingCart]="shopService.shoppingCart"></shopping-cart>`
})
export class ShopFrontComponent implements OnInit {

	ngOnInit(): void {

	}

	constructor(private shopService: ShopService) {
	}

}
