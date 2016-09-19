import {Component} from '@angular/core';
import {Input} from '@angular/core/src/metadata/directives';
import {IStoreItem, StoreService} from './store.service';

@Component({
    selector: 'store-list',
    template: `<ul>
                <li *ngFor="let item of items">{{item.title}} - <span>{{item.price|currency}}</span> <button (click)="buyItem(item)">BUY</button></li> 
                </ul>` ////convert to itemRenederComponent
})
export class StoreListComponent {
    @Input() items: IStoreItem[];
    constructor(private shoppingSvc:StoreService){}

    buyItem(item) {
        this.shoppingSvc.buyItem(item);

    }
}
