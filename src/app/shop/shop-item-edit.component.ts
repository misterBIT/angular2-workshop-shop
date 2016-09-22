import {Component, OnInit} from '@angular/core';
import {ShopService} from "./shop.service";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {ShopActions} from "./shop.actions";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

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
	private sub: Subscription;

	constructor(private shopActions: ShopActions, private fb: FormBuilder, private route: ActivatedRoute) {

	}

	onSubmit() {
		if (this.itemForm.value._id) {
			this.shopActions.updateItem(this.itemForm.value);
		} else {
			this.shopActions.addItemToShop(this.itemForm.value);
		}
	}

	ngOnInit() {
		this.itemForm = this.fb.group({
			title: ['', Validators.required],
			price: [0, Validators.required],
			"_id": [null]
		});
		this.sub = this.route.params
			.map(params=>params['id'])
			.subscribe((editId)=> {
				let editValue = this.shopActions.getItem(editId);
				if (editValue) {
					this.formAction = 'Update';
					this.itemForm.setValue(editValue);
				} else {
					this.formAction = 'Add';
					this.itemForm.reset();
				}
			});

	}

	ngOnDestory() {
		this.sub.unsubscribe();
	}
}
