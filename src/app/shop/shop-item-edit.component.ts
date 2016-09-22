import {Component, OnInit} from '@angular/core';
import {ShopService} from "./shop.service";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {ShopActions} from "./shop.actions";
import {ActivatedRoute} from "@angular/router";

@Component({
	selector: 'store-item-edit',
	template: `
<form [formGroup]="itemForm" novalidate (ngSubmit)="onSubmit()">
	<input formControlName="title"/>
	<input formControlName="price" type="number"/>
	<input formControlName="_id" type="hidden"/>
	<input type="submit" [value]="formAction"/>
</form>
`
})
export class ShopItemEditComponent implements OnInit {
	itemForm: FormGroup;
	formAction = 'Add';

	constructor(private shopActions: ShopActions, private fb: FormBuilder, private route: ActivatedRoute) {

	}

	onSubmit() {
		this.shopActions.addItemToShop(this.itemForm.value);
	}

	ngOnInit() {
		//// use route to get edit value if present, also set form action to update;
		this.itemForm = this.fb.group({
			title: ['', Validators.required],
			price: [0, Validators.required],
			"_id": [null]
		});
	}
}
