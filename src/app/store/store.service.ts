import {Injectable} from '@angular/core';

export interface IStoreItems {
    title: string;
    price: number;
}
const StoreItems = require('./storeItems.data.json');
@Injectable()
export class StoreService {
    getItems(): Promise<IStoreItems[]> {
        return new Promise((resolve, reject)=> {
            resolve(<IStoreItems[]>StoreItems);
        });
    }
}
