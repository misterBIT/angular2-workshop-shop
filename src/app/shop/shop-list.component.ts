import {Component} from '@angular/core';
import {IShopItem} from "./shop.model";
import {ShopService} from './shop.service';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
	selector: 'shop-list',
	styles: [`h3 { margin-bottom:20px;}`],
	template: `
				<h3>
				Product List
				</h3>
                <shop-list-item *ngFor="let item of items" [item]="item" (click)="gotoItem(item)">
                    <button class="btn btn-primary btn-small" (click)="buyItem($event,item)">BUY</button>
                </shop-list-item>
                `
})
export class ShopListComponent {
	private items: IShopItem[];

	constructor(private shoppingSvc: ShopService, private route: ActivatedRoute, private router: Router) {
	}

	ngOnInit(): void {
		this.items = this.route.snapshot.data['items'];
	}

	buyItem($event: Event, item: IShopItem): void {
		$event.stopPropagation();
		this.shoppingSvc.addItemToCart(item);
	}

	gotoItem(item: IShopItem): void {
		this.router.navigate(['shop', item._id]);
	}
}
