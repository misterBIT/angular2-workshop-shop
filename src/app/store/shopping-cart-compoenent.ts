import {Component, ChangeDetectionStrategy} from '@angular/core';
import {StoreService, IStoreItem} from './store.service';
import {Input} from '@angular/core/src/metadata/directives';

@Component({
    selector: 'shopping-cart',
    // changeDetection: ChangeDetectionStrategy.OnPush,
    template: `<h2>Shopping Cart</h2><ul>
<li *ngFor="let item of shoppingCart;let i = index">{{item.title}} <button (click)="store.removeItem(i)">X</button></li>

</ul>
<span>Total Sum:{{sum}}</span>`
})
export class ShoppingCartCompoennt {
    @Input() shoppingCart: IStoreItem[] = [];

    constructor(private store: StoreService) {

    }

    get sum() {
        console.log('sum called');
        return this.shoppingCart.reduce((acc, item)=>acc += (+item.price), 0)
    }

}
