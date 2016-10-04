import {Component, OnInit} from "@angular/core";
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";
@Component({
	template: `<h2>User Registration</h2>
	<form novalidate>
	    <h5>User Details</h5>
		<div class="form-group">
	        <label for="username">Username</label>
	        <input type="text" class="form-control" id="username" placeholder="Username">
	        <!--<div class="help-block alert alert-warning">Username is required</div>-->
	    </div>
	    <div class="form-group">
	        <label for="password">Password</label>
	        <input type="password" class="form-control" id="password" placeholder="Password">
	    </div>
	    <div class="form-group">
	        <label for="email">Email</label>
	        <input type="email" class="form-control" id="email" placeholder="E-Mail">
	    </div>
	    
	    
	    <h5>Address</h5>
	    
	    <div class="row">
	   		  <div class="form-group col-xs-4">
                <label>City</label>
                <input type="text" class="form-control" >
              </div>
             <div class="form-group col-xs-4">
                <label>Street</label>
                <input type="text" class="form-control" >
                <!--<small class="text-danger">Street is required </small>-->
              </div>
              <div class="form-group col-xs-4">
                <label>zip</label>
                <input type="number" class="form-control">
              </div>
        </div>
        
        <button class="btn btn-success" type="submit">Register</button>
        <button class="btn btn-warning" type="reset">Reset</button>
	</form>


`
})
export class RegistrationComponent implements OnInit {

	constructor(public authService: AuthService, public router: Router) {
	}

	ngOnInit() {


	}

}