import {Injectable} from '@angular/core';

export interface IShopItems {
    title: string;
    price: number;
}
const ShopItems = require('./shopItems.data.json');
@Injectable()
export class ShopService {
    getItems(): Promise<IShopItems[]> {
        return new Promise((resolve, reject)=> {
            resolve(<IShopItems[]>ShopItems);
        });
    }
}
