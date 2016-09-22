import {Component, ViewEncapsulation, ChangeDetectionStrategy} from "@angular/core";
import {select} from "ng2-redux";
import {Observable} from "rxjs";

@Component({
	selector: 'app',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None,

})
export class AppComponent {
	@select(['login', 'isLoggedIn']) login$: Observable<boolean>;
	loginText$ = this.login$.map((loginVal: boolean)=>loginVal ? 'Logout' : 'Login');

	constructor() {
	}
}
