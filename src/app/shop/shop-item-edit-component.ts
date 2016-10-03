import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {ShopService} from "./shop.service";

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

	constructor(private fb: FormBuilder, private route: ActivatedRoute, private shopService: ShopService) {

	}

	onSubmit() {
		if (this.formAction === 'add') {
			this.shopService.addItemToShop(this.itemForm.value)
		} else {
			//this.shopService.editItemOfShop(this.itemForm.value)
		}

	}

	ngOnInit() {
		//// use route to get edit value if present, also set form action to update;
		this.itemForm = this.fb.group({
			title: ['', Validators.required],
			price: [0, Validators.required],
			"_id": [null]
		});
		this.route.params
			.map(params=>(<any>params.id))
			.subscribe(editID => {
				if (editID) {
					this.formAction = 'update';
					this.shopService.getItem(editID).then((item)=> {
						this.itemForm.setValue(item);
					});
				} else {
					this.formAction = 'add';
				}

			})
	}
}
