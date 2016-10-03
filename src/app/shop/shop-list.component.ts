import {Component} from '@angular/core';
import {IShopItem} from "./shop.model";
import {ShopService} from './shop.service';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
	selector: 'shop-list',
	template: `
				<h3>
				Product List
				</h3><ul>
                	<li (click)="gotoItem(item)" *ngFor="let item of items">
                		<shop-list-item [item]="item">
                			<button (click)="buyItem(item)">BUY</button>
                		</shop-list-item>
                	</li> 
                </ul>`
})
export class ShopListComponent {
	private items: IShopItem[];

	constructor(private shoppingSvc: ShopService, private route: ActivatedRoute, private router: Router) {
	}

	ngOnInit() {
		this.items = this.route.snapshot.data['items'];
	}

	buyItem(item) {
		this.shoppingSvc.addItemToCart(item);

	}

	gotoItem(item) {
		this.router.navigate(['shop', item._id]);
	}
}
