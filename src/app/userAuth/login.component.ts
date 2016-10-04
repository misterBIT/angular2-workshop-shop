import {Component}   from '@angular/core';
import {Router, NavigationExtras}      from '@angular/router';
import {AuthService} from "./auth.service";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {userFieldsValidationSchema} from "./user.model";

@Component({
	template: `
    <h2>LOGIN</h2>
    <p>{{message}}</p>
    <form  novalidate [formGroup]="loginForm"  #form="ngForm" *ngIf="!authService.isLoggedIn" (ngSubmit)="login()">
	<div class="form-group" [class.hasError]="loginForm.get('username').invalid && form.submitted">
    	<label for="username">Username</label>
    	<input formControlName="username" type="text" class="form-control" id="username" placeholder="Username">
    	<div class="help-block alert alert-warning" *ngIf="loginForm.get('username').hasError('required') && form.submitted">Username is required</div>
  	</div>
  	<div class="form-group" [class.hasError]="loginForm.get('password').invalid && form.submitted">
    	<label for="password">Password</label>
    	<input formControlName="password" type="password" class="form-control" id="password" placholder="Password">
    	<div class="help-block alert alert-warning" *ngIf="loginForm.get('password').hasError('required') && form.submitted">Password is required</div>
    	<div class="help-block alert alert-warning" *ngIf="loginForm.get('password').hasError('minlength') && form.submitted">Password must be longer than 5 characters</div>
  	</div>
    <p>
      <button class="btb btn-info" type="submit">Login</button>
    </p>
	</form>
	<button (click)="logout()" *ngIf="authService.isLoggedIn">Logout</button>
`
})
export class LoginComponent {
	loginInProgress: boolean = false;
	loginForm: FormGroup;

	constructor(public authService: AuthService, public router: Router, private fb: FormBuilder) {
	}

	ngOnInit() {
		this.loginForm = this.fb.group({
			username: ['', userFieldsValidationSchema.username],
			password: ['', userFieldsValidationSchema.password]
		})
	}

	get message() {
		return (this.loginInProgress) ? 'Trying to log in ...' : 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
	}

	login() {
		if (!this.loginForm.valid) return;
		this.loginInProgress = true;
		this.authService.login(this.loginForm.value).subscribe((loginVal) => {
			this.loginInProgress = false;
			if (loginVal) {
				// Get the redirect URL from our auth service
				// If no redirect has been set, use the default
				let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/';
				this.router.navigate([redirect]);
			}
		});
	}

	logout() {
		this.authService.logout();
	}
}

