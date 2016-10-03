import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {IShopItem} from "./shop.model";
import {Observable} from "rxjs";

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

	getItem(id: string) {
		let item = this.items.filter((item)=> item._id === id)[0];
		return Promise.resolve(item);
	}

	addItemToCart(item: IShopItem) {
		this.shoppingCart = [...this.shoppingCart, item];

	}

	removeItemFromCart(index: number) {
		this.shoppingCart = [...this.shoppingCart.slice(0, index), ...this.shoppingCart.slice(index + 1)];

	}

	addItemToShop(data): Promise<IShopItem> {
		return this.http.post('http://localhost:3003/data/shopItems', data)
			.map((res)=><IShopItem>res.json())
			.do((item)=> {
				this.items = [...this.items, item];
			})
			.toPromise();
	}

	removeItemFromShop(item) {
		return this.http.delete(`http://localhost:3003/data/shopItems/${item._id}`)
			.map((res)=><IShopItem>res.json())
			.map(()=> {
				let index = this.items.indexOf(item);
				this.items = [...this.items.slice(0, index), ...this.items.slice(index + 1)];
			})
			.toPromise();

	}


}
