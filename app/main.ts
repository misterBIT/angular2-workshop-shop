import {bootstrap} from "@angular/platform-browser-dynamic";
import {LocationStrategy, PathLocationStrategy} from "@angular/common";
import {provideForms, disableDeprecatedForms} from "@angular/forms";
import {HTTP_PROVIDERS} from "@angular/http";
import {ROUTER_PROVIDERS} from "./app.routes";
import {AppComponent} from "./app.component";

bootstrap(AppComponent, [
	disableDeprecatedForms(),
	provideForms(),
	ROUTER_PROVIDERS,
	HTTP_PROVIDERS,
	{provide: LocationStrategy, useClass: PathLocationStrategy}
]);

