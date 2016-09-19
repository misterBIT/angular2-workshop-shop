import {Component, OnInit} from '@angular/core';
import {IStoreItems, StoreService} from './store.service';

@Component({
    selector: 'store-front',
    template: `<h3>Store</h3>
<ul>
<li *ngFor="let item of items">{{item.title}} - <span>{{item.price|currency}}</span></li>
</ul>`
})
export class StoreFrontComponent implements OnInit {
    private items: IStoreItems[];

    ngOnInit(): void {
        this.storeSvc.getItems().then((items)=> {
            this.items = items;
        });
    }

    constructor(private storeSvc: StoreService) {
    }

}
