import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
	selector: 'store-item',
	templateUrl: `<h1> Item</h1>`
})
export class StoreItemComponent implements OnInit {
	constructor(private route: ActivatedRoute) {
	}

	ngOnInit() {
	}

}