import {Component, ViewEncapsulation} from "@angular/core";
import {AuthService} from "./userAuth/auth.service";

@Component({
	selector: 'app',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.scss'],
	encapsulation: ViewEncapsulation.None,

})
export class AppComponent {
	constructor(private auth: AuthService) {
	}
}
