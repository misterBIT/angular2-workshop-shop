import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
export interface IStoreItem {
    title: string;
    price: number;
}
@Injectable()
export class StoreService {
    shoppingCart: IStoreItem[] = []

    constructor(private http: Http) {
    }

    getItems(): Promise<IStoreItem[]> {
        return this.http.get('./storeItems.data.json')
            .map((res)=><IStoreItem[]>res.json())
            .toPromise();
    }

    buyItem(item: IStoreItem) {
        this.shoppingCart = [...this.shoppingCart, item];

    }

    removeItem(index: number) {
        this.shoppingCart = [...this.shoppingCart.slice(0, index), ...this.shoppingCart.slice(index + 1)]

    }
}
