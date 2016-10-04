import {Component, OnInit} from "@angular/core";
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {userFieldsValidationSchema} from "./user.model";
@Component({
	template: `<h2>User Registration</h2>
	<form [formGroup]="form" novalidate (ngSubmit)="onSubmit()">
	    <h5>User Details</h5>
		<div class="form-group">
	        <label for="username">Username</label>
	        <input [formControl]="form.get('username')" type="text" #username="ngForm" class="form-control" id="username" placeholder="Username">
	        <div *ngIf="username.control.dirty && username.control.hasError('required')" class="help-block alert alert-warning" >Username is required</div>
	    </div>
	    <div class="form-group">
	        <label for="password">Password</label>
	        <input formControlName="password" type="password" class="form-control" id="password" placeholder="Password">
	    </div>
	    <div class="form-group">
	        <label for="email">Email</label>
	        <input formControlName="email" type="email" class="form-control" id="email" placeholder="E-Mail">
	    </div>
	    
	    
	    <h5>Address</h5>
	    
	    <div class="row" formGroupName="address">
	   		  <div class="form-group col-xs-4">
                <label>City</label>
                <input formControlName="city" type="text" class="form-control" >
              </div>
             <div class="form-group col-xs-4">
                <label>Street</label>
                <input formControlName="street" type="text" class="form-control" >
                <small *ngIf="form.getError('required',['address','street'])" class="text-danger">Street is required </small>
              </div>
              <div class="form-group col-xs-4">
                <label>zip</label>
                <input formControlName="zip" type="number" class="form-control">
              </div>
        </div>
        
        <button class="btn btn-success" type="submit">Register</button>
        <button class="btn btn-warning" type="reset">Reset</button>
	</form>

<pre>
{{form.value|json}}

</pre>
`
})
export class RegistrationComponent implements OnInit {
	form: FormGroup;

	constructor(public authService: AuthService, private fb: FormBuilder) {
	}

	ngOnInit() {
		this.form = this.fb.group({
			username: ['', userFieldsValidationSchema.username],
			email: ['', userFieldsValidationSchema.email],
			password: ['', userFieldsValidationSchema.password],
			address: this.fb.group({
				city: ['', userFieldsValidationSchema.address_city],
				street: ['', userFieldsValidationSchema.address_street],
				zip: ['', userFieldsValidationSchema.address_zip]
			})
		});

	}

	onSubmit() {
		if (this.form.valid) {
			this.authService.register(this.form.value);
		}
	}

}