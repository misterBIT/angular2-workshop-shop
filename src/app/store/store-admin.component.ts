import {Component, OnInit} from '@angular/core';
import {StoreService} from "./store.service";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

@Component({
	selector: 'store-admin',
	template: `<h1>Store Admin</h1>
<form [formGroup]="itemForm" novalidate (ngSubmit)="onSubmit()">
	<input formControlName="title"/>
	<input formControlName="price" type="number"/>
	<input type="submit" value="Add"/>
</form>

`
})
export class StoreAdminComponent implements OnInit {
	itemForm: FormGroup;

	constructor(private storeSvc: StoreService, private fb: FormBuilder) {
	}

	onSubmit() {
		this.storeSvc.addItem(this.itemForm.value);
	}

	ngOnInit() {
		this.itemForm = this.fb.group({title: ['', Validators.required], price: [0, Validators.required]});
	}
}
