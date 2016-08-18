


// import {bootstrap}    from '@angular/platform-browser-dynamic';
// import {LocationStrategy, PathLocationStrategy} from '@angular/common';
// import {provideForms, disableDeprecatedForms} from '@angular/forms';
// import {HTTP_PROVIDERS} from '@angular/http';
// import {ROUTER_PROVIDERS} from './app/app.routes';
// import {AppComponent} from './app/app.component';
// import {MonsterService} from "./app/monster/monster.service";

// global import of lib css using style-loader, the rest of our css is required as string for ng2 components
require('!!style!css!bootstrap/dist/css/bootstrap.min.css');
require('!!style!css!ng2-toastr/ng2-toastr.css');
// bootstrap(AppComponent, [
//     disableDeprecatedForms(),
//     provideForms(),
//     ROUTER_PROVIDERS, MonsterService,
//     HTTP_PROVIDERS,
//     {provide: LocationStrategy, useClass: PathLocationStrategy}
// ]);



import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
