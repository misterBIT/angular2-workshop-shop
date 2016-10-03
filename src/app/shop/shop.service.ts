import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
export interface IShopItem {
	title: string;
	price: number;
}
@Injectable()
export class ShopService {
	shoppingCart: IShopItem[] = [];
	private items: IShopItem[] = [];

	constructor(private http: Http) {
	}

	getItems(): Promise<IShopItem[]> {
		return this.http.get('http://localhost:3003/data/shopItems')
			.map((res)=><IShopItem[]>res.json())
			.do((items)=> {
				this.items = items;
			})
			.toPromise()
			.catch(e=> {
				console.log(e);
			});
	}

	addItem(data): Promise<IShopItem> {
		return this.http.post('http://localhost:3003/data/shopItems', data)
			.map((res)=><IShopItem>res.json())
			.do((item)=> {
				this.items = [...this.items, item];
				return item;
			})
			.toPromise();
	}

	buyItem(item: IShopItem) {
		this.shoppingCart = [...this.shoppingCart, item];

	}

	removeItem(index: number) {
		this.shoppingCart = [...this.shoppingCart.slice(0, index), ...this.shoppingCart.slice(index + 1)];

	}

	getItem(id: string) {
		return this.http.get('http://localhost:3003/data/shopItems/' + id)
			.map((res)=><IShopItem>res.json())
			.toPromise();
	}
}
