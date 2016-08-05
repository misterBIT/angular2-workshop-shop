import {provide} from '@angular/core';
import {bootstrap}    from '@angular/platform-browser-dynamic';
import {LocationStrategy, PathLocationStrategy} from '@angular/common';
import {provideForms, disableDeprecatedForms} from '@angular/forms';
import {HTTP_PROVIDERS} from '@angular/http';
import {ROUTER_PROVIDERS} from './app/app.routes';
import {AppComponent} from './app/app.component';

require('!!style!css!bootstrap/dist/css/bootstrap.min.css'); //global import of lib css using style-loader, the rest of our css is required as string for ng2 components
bootstrap(AppComponent, [
	disableDeprecatedForms(),
	provideForms(),
	ROUTER_PROVIDERS,
	HTTP_PROVIDERS,
	{provide:LocationStrategy, useClass: PathLocationStrategy}
]);

