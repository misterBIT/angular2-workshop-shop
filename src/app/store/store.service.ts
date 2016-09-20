import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
export interface IStoreItem {
	title: string;
	price: number;
}
@Injectable()
export class StoreService {
	shoppingCart: IStoreItem[] = [];
	private items: IStoreItem[] = [];

	constructor(private http: Http) {
	}

	getItems(): Promise<IStoreItem[]> {
		return this.http.get('http://localhost:3003/data/storeItems')
			.map((res)=><IStoreItem[]>res.json())
			.do((items)=> {
				this.items = items;
			})
			.toPromise()
			.catch(e=> {
				console.log(e);
			});
	}

	addItem(data): Promise<IStoreItem> {
		return this.http.post('http://localhost:3003/data/storeItems', data)
			.map((res)=><IStoreItem>res.json())
			.do((item)=> {
				this.items = [...this.items, item];
				return item;
			})
			.toPromise();
	}

	buyItem(item: IStoreItem) {
		this.shoppingCart = [...this.shoppingCart, item];

	}

	removeItem(index: number) {
		this.shoppingCart = [...this.shoppingCart.slice(0, index), ...this.shoppingCart.slice(index + 1)];

	}

	getItem(id: string) {
		return this.http.get('http://localhost:3003/data/storeItems/' + id)
			.map((res)=><IStoreItem>res.json())
			.toPromise();
	}
}
