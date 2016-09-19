import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

// add global import of lib css using style-loader, the rest of our css is required as string for ng2 components
// example for bootstrap
require('!!style!css!bootstrap/dist/css/bootstrap.min.css');

platformBrowserDynamic().bootstrapModule(AppModule);
