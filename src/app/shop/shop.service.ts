import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Observable} from "rxjs";
export interface IShopItem {
	title: string;
	price: number;
	_id:string;
}
@Injectable()
export class ShopService {

	constructor(private http: Http) {
	}

	getItems(): Observable<IShopItem[]> {
		return this.http.get('http://localhost:3003/data/storeItems')
			.map((res)=><IShopItem[]>res.json())
	}

	addItem(data): Observable<IShopItem> {
		return this.http.post('http://localhost:3003/data/storeItems', data)
			.map((res)=><IShopItem>res.json())
	}


	getItem(id: string): Observable<IShopItem> {
		return this.http.get('http://localhost:3003/data/storeItems/' + id)
			.map((res)=><IShopItem>res.json())
	}
}
