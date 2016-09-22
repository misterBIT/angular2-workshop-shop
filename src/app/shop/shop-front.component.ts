import {Component, OnInit} from '@angular/core';
import {select} from 'ng2-redux';
@Component({
	selector: 'store-front',
	template: `<h3>Shop</h3>
				<router-outlet></router-outlet>
				<shopping-cart [shoppingCart]="shoppingCart$ |async"></shopping-cart>`
})
export class ShopFrontComponent implements OnInit {
	@select() private shoppingCart$;

	ngOnInit(): void {

	}

	constructor() {
	}

}
