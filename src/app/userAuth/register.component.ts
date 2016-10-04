import {Component, OnInit} from "@angular/core";
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";
@Component({
	template: `<h2>User Registration</h2>
	<form novalidate #form="ngForm" (ngSubmit)="onSubmit(form.value)">
	    <h5>User Details</h5>
		<div class="form-group">
	        <label for="username">Username</label>
	        <input type="text" #username="ngModel" ngModel required name='username' class="form-control" id="username" placeholder="Username">
	        <div *ngIf="username.control.hasError('required')" class="help-block alert alert-warning">Username is required</div>
	    </div>
	    <div class="form-group">
	        <label for="password">Password</label>
	        <input #password="ngModel" ngModel name='password' type="password" class="form-control" id="password" placeholder="Password">
	    </div>
	    <div class="form-group">
	        <label for="email">Email</label>
	        <input #email="ngModel" ngModel name='email' type="email" class="form-control" id="email" placeholder="E-Mail">
	    </div>
	    
	    
	    <h5>Address</h5>
	    
	    <div class="row" ngModelGroup="address">
	   		  <div class="form-group col-xs-4">
                <label>City</label>
                <input #city="ngModel" ngModel name='city' type="text" class="form-control" >
              </div>
             <div class="form-group col-xs-4">
                <label>Street</label>
                <input #street="ngModel" ngModel name='street' type="text" class="form-control" >
                <small class="text-danger" *ngIf="street.control.hasError('required')">Street is required </small>
              </div>
              <div class="form-group col-xs-4">
                <label>zip</label>
                <input  #zip="ngModel" ngModel name='zip'  type="number" class="form-control">
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

	constructor(public authService: AuthService) {
	}

	ngOnInit() {
	}

	onSubmit(formValue) {
		this.authService.register(formValue)
	}

}