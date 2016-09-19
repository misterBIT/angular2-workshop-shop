import {Component, OnInit} from '@angular/core';
import {IStoreItem, StoreService} from './store.service';

@Component({
    selector: 'store-front',
    template: `<h3>Store</h3>
<store-list [items]="items"></store-list>
<shopping-cart [shoppingCart]="storeSvc.shoppingCart"></shopping-cart>`
})
export class StoreFrontComponent implements OnInit {
    private items: IStoreItem[];

    ngOnInit(): void {
        this.storeSvc.getItems().then((items)=> {
            this.items = items;
        });
    }

    constructor(private storeSvc: StoreService) {
    }

}
