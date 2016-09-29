import {Component, EventEmitter} from '@angular/core';
import {IStoreItem} from './store.service';
import {Input,Output} from "@angular/core";

@Component({
	selector: 'store-list',
	template: `<ul>
               		<li *ngFor="let item of items"><store-item-detail [item]="item"> <button (click)="purchase.emit(item)">BUY</button></store-item-detail> </li> 
               </ul>`
})
export class StoreListComponent {
	@Input() items: IStoreItem[];
	@Output() purchase = new EventEmitter<IStoreItem>();

}
