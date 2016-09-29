import {Component, OnInit} from '@angular/core';
import {IShopItems, ShopService} from './shop.service';

@Component({
    selector: 'shop-front',
    template: `<h3>Shop</h3>
<ul>
<li *ngFor="let item of items">{{item.title}} - <span>{{item.price|currency}}</span></li>
</ul>`
})
export class ShopFrontComponent implements OnInit {
    private items: IShopItems[];

    ngOnInit(): void {
        this.shopSvc.getItems().then((items)=> {
            this.items = items;
        });
    }

    constructor(private shopSvc: ShopService) {
    }

}
