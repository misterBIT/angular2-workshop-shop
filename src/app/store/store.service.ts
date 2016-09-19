import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
export interface IStoreItems {
    title: string;
    price: number;
}
@Injectable()
export class StoreService {
    constructor(private http: Http) {
    }

    getItems(): Promise<IStoreItems[]> {
        return this.http.get('./storeItems.data.json')
            .map((res)=><IStoreItems[]>res.json())
            .toPromise();
    }
}
